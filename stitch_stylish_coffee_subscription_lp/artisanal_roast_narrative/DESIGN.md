---
name: Artisanal Roast Narrative
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#755849'
  on-secondary: '#ffffff'
  secondary-container: '#fed8c5'
  on-secondary-container: '#795c4d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#29180a'
  on-tertiary-container: '#9a7e6c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#e4bfad'
  on-secondary-fixed: '#2b170b'
  on-secondary-fixed-variant: '#5b4133'
  tertiary-fixed: '#fedcc6'
  tertiary-fixed-dim: '#e1c0ab'
  on-tertiary-fixed: '#29180a'
  on-tertiary-fixed-variant: '#594232'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-xl:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-edge: 64px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is anchored in the concept of "The Curator’s Library." It treats coffee beans as rare artifacts, utilizing a high-end, editorial aesthetic that prioritizes white space and photographic excellence over decorative UI elements. The brand personality is sophisticated, knowledgeable, and quiet—evoking the atmosphere of an upscale, minimalist boutique.

The visual style is **Minimalism** blended with **Editorial Design**. It avoids trendy shadows or gradients in favor of structural integrity, precise alignment, and a limited color palette. The goal is to move the user through the subscription process with a sense of calm and intentionality, mirroring the ritual of brewing a morning cup of coffee.

## Colors

The palette is derived from the lifecycle of the coffee bean—from the scorched earth to the brewed liquid and the steamed milk. 

- **Deep Charcoal (#1A1A1A):** Used primarily for typography, iconography, and high-impact structural elements. It provides the "ink" on the page.
- **Minimalist Cream (#F9F6F1):** The primary canvas. This off-white provides warmth that pure white lacks, making the digital experience feel more tactile and organic.
- **Warm Mocha (#7B5E4F):** Reserved for primary actions, buttons, and subtle accents. It serves as the bridge between the high-contrast charcoal and the cream.
- **Subtle Sand (#A68976):** A tertiary tone used for secondary buttons, borders, and dividers to maintain softness in the layout.

## Typography

The typography strategy relies on the tension between the classicism of the serif and the utility of the sans-serif. 

**Noto Serif** is used for all narrative moments—headlines, pull quotes, and product names. It should be typeset with generous leading to maintain an airy, premium feel. 

**Work Sans** handles the functional aspects of the interface. It is used for descriptions, technical data (roast levels, altitudes), and navigation. The "Label-Caps" style is specifically designed for small metadata or section overlines, providing a structural anchor to the more fluid serif headings.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model centered within the viewport. A 12-column grid is standard for desktop, but the "Artisanal" vibe is achieved by breaking the grid with asymmetrical content placement—for instance, a product image spanning 7 columns with the description tucked into the remaining 4, leaving a 1-column "breath" of white space.

Vertical rhythm is intentionally loose. Section gaps are significant (120px+) to ensure that each product or story feels isolated and important. Micro-spacing follows a strict 8px base unit to ensure alignment amidst the generous margins.

## Elevation & Depth

To maintain a minimalist and high-end aesthetic, this design system avoids traditional drop shadows. Depth is conveyed through:

1.  **Tonal Layering:** Using a slightly darker cream (#F2EEE8) for card backgrounds or section containers to differentiate them from the main page background.
2.  **Low-Contrast Outlines:** Subtle 1px borders in Warm Mocha at 20% opacity are used to define interactive areas without adding visual weight.
3.  **High-Contrast Overlays:** When modals are required, a Deep Charcoal scrim at 40% opacity is used to push the background away, focusing purely on the foreground content.

The interface should feel "flat" but tactile, like premium stationary.

## Shapes

The shape language is strictly **Soft (0.25rem)**. While organic coffee beans are rounded, a high-end service requires the precision of tailored edges. 

The slight rounding prevents the UI from feeling "sharp" or aggressive, but it stops far short of being "bubbly." Images should maintain sharp 90-degree corners to emphasize the editorial, photography-first nature of the design system, while buttons and input fields utilize the soft radius for a subtle hint of approachability.

## Components

### Buttons
Primary buttons use a solid Deep Charcoal background with Minimalist Cream text. Secondary buttons use a Warm Mocha outline with no fill. The hover state for primary buttons involves a slight shift to Warm Mocha, creating a "roasting" effect.

### Input Fields
Inputs are minimalist, consisting of a bottom-border only (Deep Charcoal, 1px) with the label in the "Label-Caps" typography style sitting above the line. This mimics the look of a premium order form.

### Subscription Cards
Cards should not have borders or shadows. They are defined by a background color shift to a secondary neutral cream. Content is centered, with the roast date and origin clearly emphasized using the serif typeface.

### Progress Indicators
For the subscription checkout, use a thin, elegant line-based progress bar. Avoid heavy circles or numbers; instead, use simple text labels in the "Label-Caps" style to indicate the current step.

### Image Treatment
All product photography should be treated with a warm, desaturated filter to harmonize with the Warm Mocha accents. Use "contain" or "cover" framing with ample internal padding within cards to let the product breathe.