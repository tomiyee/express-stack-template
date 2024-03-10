# Views

Part of the reason why I chose Vite instead of Next is the increase flexibility when doing routing and pages. 

Views are individual pages of the application. If able, these views or pages will be a single file with an appropriate name. If the view or page needs any helper components, I make a directory with "Pascal Case" naming convention. Within the directory, we have a dedicated index.ts file that imports and exports the component.

The reason for this organization is to allow imports to look the same whether it is importing directly from a file or from a directory. 

The view's helper components will be in the corresponding page's directory. If multiple pages need to share the same component, it becomes elevated to the top-level `/ui-components`.