# React Router

### What is React Router ?

> It is a fully-featured client and server-side routing library for React. Helps to create and navigate between different URLs that make up web application. Provides unique URLs for different components in the app and make the UI easily shareable with other users.

### Installation

```shell
npm install react-router-dom@6
```

### 1. Configuring Routes

> Configure the routes using the `<Routes>` and `<Route>` component from React Router.
> Each `<Route>` accept 2 props
> 1st - path -> path in the browser url.
> 2nd - element -> corresponding react element to the render when the path is matched.

### 2. Links

> Navigate between the Routes -> React Router provides `<Link>` components.
> It renders anchor `<a>` element in DOM.
> `<Link>` accept `to` prop -> in this prop assign the path of configure route.

### 3. Active Links

> React Router provides `<NavLink>` component which knows wheather link is active or not.
> `<NavLink>` component is specifically made for Navbar or Breadcrumbs component.
