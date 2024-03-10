# Theme Customization

Material UI allows for customizing the theme by changing the color palette, typography, and default component appearances. 

In this directory, we first specify the color palette for the application in `palette.tsx`. We then define functions that will specify the typography in `typography.tsx` and the component style overrides in `components.tsx`. These are functions because they will use the color palette in `palette.tsx` to color the components. 

Finally, all of these style overrides are used in `ThemeCustomization.tsx` to create the wrapper that will provide the style to all its children.

A brief summary of the above is as follows:

```
/theme
├── palette.tsx             # The color palette
├── typography.tsx          # The custom font settings for MUi Typography variants
├── components.tsx          # The custom styles for MUI components
└── ThemeCustomization.tsx  # The wrapper that provides the above MUI styles to its children
```