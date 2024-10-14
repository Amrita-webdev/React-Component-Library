import Card from "./Card";
import { options } from "./constants";

export default {
    title: 'Card',
    component: Card,
};

export const Default = () => <Card />

export const Colors = () => 
    options.colors.map((index, color) => {
        return <Card key={index} color={color} />
    })

    export const Sizes = () => 
        options.sizes.map((index, size) => {
            return <Card key={index} size={size} />
        })
