export const renderBasedOnScreen = (
    width:number, 
    mobile: () => JSX.Element, 
    desktop: () => JSX.Element
    ):JSX.Element => {
    return width <= 480 
        ? mobile() 
        : desktop();
}