# Project History Log

## 2023-04-11

- Initial setup of tracking files (context.md and history.md)
- Modified theme to highlight active navigation menu items with goldenrod border
- Updated brand information:
  - Changed theme name from "Bans OS 2.0" to "Marble Brew"
  - Changed developer name from "Team90Degree" to "Studio Kaffein"
  - Updated documentation links and theme information

## 2023-04-12

- Enhanced active menu highlighting:
  - Updated main-menu.liquid to add active class and aria-current attributes to menu items
  - Added enhanced styling for active menu items including blue text color and bold font weight
  - Improved accessibility with aria-current attribute for screen readers
- Fixed double highlighting issue:
  - Unified active menu styling by removing pseudo-element underline
  - Ensured only one border-bottom is applied (2px solid #daa520)
  - Added explicit text-decoration: none to prevent any default underlines
  - Improved hover state to maintain clean styling
