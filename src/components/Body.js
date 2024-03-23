import Login from "./Login";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browser from "./Browser";




const Body = () => {

   


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browser />
        },
    ]);

    




    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};
export default Body;