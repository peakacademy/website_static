# Peak Academy change spec

Record requested changes here. Do not implement them until asked. When a change ships, move it from Open to Done and update Current state.

## Open

## Current state

Live page: `index.html`.

### About

The course list reads “SAP FICO and SAP MM”.

### Latest Courses

| Card | Category | Image |
| --- | --- | --- |
| Learn SAP FICO | SAP FICO | `assets/images/learn-sap-fico.jpg` (meeting room, PEAK screen) |
| Learn SAP MM | SAP MM | `assets/images/learn-sap-mm.jpg` (SAP MM end-to-end classroom) |
| Learn SAP BODS | SAP BODS | `assets/images/learn-sap-bods.jpg` (whiteboard, Source → BODS → S/4HANA) |

Source copies of those photos are in `spec-assets/`.

### Upcoming Events

| Category | Title | Date | Duration | Image |
| --- | --- | --- | --- | --- |
| SAP FICO | Internship with Certification | 20 OCT 2026 | 80 Hours | `assets/images/event-sap-fico.jpg` |
| SAP MM | Internship with Certification | 20 OCT 2026 | 80 Hours | `assets/images/event-sap-mm.jpg` |
| SAP Data Services | Upskilling for working professionals | 15 OCT 2026 | 42 Hours | `assets/images/event-sap-data-services.jpg` |

The Summer Internship badge in Contact reads 20th October.

### Top carousel

| Slide | Content |
| --- | --- |
| 1 | “With Peak, Everything Is Easier” on `banner-item-01.jpg`. The heading, text, and button are vertically centered on the photo. The card itself is centered on the page. |
| 2 | YouTube Short `https://www.youtube.com/shorts/PBpUExddECs` (`PBpUExddECs`). The full Short is shown inside the same rounded card as the other slides, with no crop. Previous and next sit below the card. Playback starts only while this slide is active, then stops. Autoplay starts muted because browsers block sound until the visitor unmutes. Resizing the window keeps this slide and does not restart the page. |
| 3 | “SAP Solution Simplified” on `banner-item-03.jpg` |

## Done

### 1. Upcoming Events dates and SAP MM rename

In `#events`:

- SAP FICO date is `20 OCT 2026`. Duration stays 80 Hours.
- The second event category is `SAP MM` (was SAP SD) and its date is `20 OCT 2026`. Duration stays 80 Hours.
- SAP Data Services date is `15 OCT 2026`. Duration stays 42 Hours.

### 2. Latest Courses card photos

- Learn SAP FICO uses `assets/images/learn-sap-fico.jpg`.
- Learn SAP BODS uses `assets/images/learn-sap-bods.jpg`.

### 3. Rename SAP SD to SAP MM everywhere

- The course card is SAP MM / Learn SAP MM.
- About text reads “SAP FICO and SAP MM” so SAP MM is not listed twice.
- Upcoming Events already used SAP MM from item 1.

### 4. Learn SAP MM photo

The Learn SAP MM card uses `assets/images/learn-sap-mm.jpg`, the classroom photo with the “SAP MM – End to End Process” screen.

### 5. Video on the second carousel slide

The second slide of `.owl-banner` plays `https://www.youtube.com/shorts/PBpUExddECs`. The headline and photo that were on that slide are replaced by the player.

### 6. Video slide matches the other carousel cards

The second slide is the same width and height as slides 1 and 3. The full Short is visible inside that card, with space on either side. Previous and next sit below the card and do not cover the slide.

### 7. First carousel slide text alignment

On the photo slides, the heading, paragraph, and button sit as one block, vertically centered over the image. The extra bottom padding that made room for the old arrow position is removed.

### 8. Carousel horizontal alignment

The 130px left margin on each carousel card is removed, so the slide is centered in the page on desktop. Left and right gaps match.

### 9. Carousel stays on the same slide when the window changes size

Resizing, minimizing, or maximizing no longer reloads the page. The top carousel and the testimonials carousel stay on the current slide, and the video keeps playing if that slide is showing.

### 10. Summer Internship date

The Contact badge under Summer Internship reads 20th October.

### 11. Carousel height follows the screen

On phones the carousel card is capped around 460px and uses the screen height, instead of staying 720px tall. Tablets use a 560px cap. Desktop stays up to 720px.

### 12. Upcoming Events photos

- SAP FICO uses `assets/images/event-sap-fico.jpg`.
- SAP MM uses `assets/images/event-sap-mm.jpg`.
- SAP Data Services uses `assets/images/event-sap-data-services.jpg`.

### 13. SAP FICO Consultant photo

Bhargavi Setty’s testimonial uses `assets/images/testimonial-bhargavi-setty.jpg`.
