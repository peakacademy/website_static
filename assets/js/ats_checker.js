export function handleATSDialog() {
    const atsFab = document.getElementById("atsFab");
    const atsDialog = document.getElementById("atsDialog");
    const form = document.getElementById("resumeForm");
    const loader = document.getElementById("loaderOverlay");

    atsFab.addEventListener("click", function () {
        atsDialog.classList.remove("hidden");
    });

    function closeATSDialog() {
        atsDialog.classList.add("hidden");
    }

    window.closeATSDialog = closeATSDialog; // Expose to global scope for inline onclick
    window.resetATSForm = resetATSForm;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        await submitATSForm();

    });

    async function submitATSForm() {
        const fileInput = document.getElementById("resumeInput");
        const jobDescription = document.getElementById("jobDescription").value;
        const file = fileInput.files[0];

        if (!jobDescription.trim()) {
            alert("Please enter the job description.");
            return;
        }

        if (!file) {
            alert("Please select a resume file.");
            return;
        }

        loader.classList.remove("hidden");

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("content", jobDescription);
            formData.append("language", "english");

            // const uploadResponse = await fetch(
            //     "https://api.apyhub.com//sharpapi/api/v1/hr/resume_job_match_score",
            //     {
            //         method: "POST",
            //         headers: {
            //             "apy-token": "APY0knPN6NtHnfDsxux1xUeQxWhQYF1rAA1jwrwqfcx6d7bYvgDIBLYWP5EOjjY8x54k",
            //         },
            //         body: formData,
            //     }
            // );
            //
            // const uploadData = await uploadResponse.json();
            // const jobId = uploadData.job_id;

            // Simulate file upload delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Simulate received job ID
            const jobId = "mock-job-id-d62c0ba6";

            if (!jobId) throw new Error("Failed to receive job ID");

            const result = await pollForStatus(jobId);
            renderResults(result);
            alert("Match Score: " + result.match_scores + "%");

        } catch (error) {
            console.error("Upload or polling error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            loader.classList.add("hidden");
        }
    }

    async function pollForStatus(jobId, retries = 20, delay = 1500) {
        for (let i = 0; i < retries; i++) {
            // const res = await fetch(`https://api.apyhub.com/sharpapi/api/v1/hr/resume_job_match_score/job/status/${jobId}`, {
            //     method: "GET",
            //     headers: {
            //         "apy-token": "APY0knPN6NtHnfDsxux1xUeQxWhQYF1rAA1jwrwqfcx6d7bYvgDIBLYWP5EOjjY8x54k",
            //         "Content-Type": "application/json",
            //     },
            // });
            //const data = await res.json();

            // Simulate file upload delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const data = {
                "data": {
                    "type": "api_job_result",
                    "id": "d62c0ba6-7c5a-4426-9e0e-4914031be181",
                    "attributes": {
                        "status": "success",
                        "type": "hr_resume_job_match_score",
                        "result": {
                            "match_scores": {
                                "overall_match": 55,
                                "skills_match": 80,
                                "experience_match": 30,
                                "education_match": 70,
                                "certifications_match": 60,
                                "job_title_relevance": 50,
                                "industry_experience_match": 40,
                                "project_experience_match": 70,
                                "technical_stack_match": 80,
                                "methodologies_match": 0,
                                "soft_skills_match": 70,
                                "language_proficiency_match": 0,
                                "location_preference_match": 50,
                                "remote_work_flexibility": 0,
                                "certifications_training_relevance": 60,
                                "years_experience_weighting": 30,
                                "recent_role_relevance": 50,
                                "management_experience_match": 0,
                                "cultural_fit_potential": 60,
                                "stability_score": 50
                            },
                            "explanations": {
                                "skills_match": "The candidate possesses key skills such as SQL, Python, and Data Visualization, which align well with the data analyst role.",
                                "experience_match": "The candidate has limited professional experience, with only a 2-month internship, which impacts the experience match score.",
                                "education_match": "The candidate is pursuing a Master of Computer Applications, which is relevant to the data analyst position.",
                                "certifications_match": "The candidate holds relevant certifications in Data Analysis and Visualization, enhancing their profile for the role.",
                                "language_proficiency_match": "No specific language proficiency is mentioned in the resume, resulting in a low score for this parameter."
                            }
                        }
                    }
                }
            };


            if (data?.data?.attributes?.status === "success" && data?.data?.attributes?.result?.match_scores
            ) {
                return data.data.attributes.result;
            }

            await new Promise((resolve) => setTimeout(resolve, delay));
        }

        throw new Error("Job processing timed out or failed.");
    }

    function renderResults(result) {
        const resultsSection = document.getElementById("atsResults");
        const breakdown = document.getElementById("scoreBreakdown");
        const explanations = document.getElementById("scoreExplanations");
        const loader = document.getElementById("loaderOverlay");
        const form = document.getElementById("resumeForm");

        loader.classList.add("hidden");
        form.classList.add("hidden");

        breakdown.innerHTML = "";
        explanations.innerHTML = "";

        for (const [key, value] of Object.entries(result.match_scores)) {
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            breakdown.innerHTML += `
      <div class="score-row"><strong>${label}:</strong> ${value}%</div>
    `;
        }

        if (result.explanations) {
            for (const [key, explanation] of Object.entries(result.explanations)) {
                const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                explanations.innerHTML += `
        <div class="explanation-row"><strong>${label}:</strong> ${explanation}</div>
      `;
            }
        }

        resultsSection.classList.remove("hidden");
    }

    function resetATSForm() {
        const form = document.getElementById("resumeForm");
        const resultsSection = document.getElementById("atsResults");

        form.reset();
        form.classList.remove("hidden");
        resultsSection.classList.add("hidden");
    }
}