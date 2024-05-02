/**
 * import {Button} from "./Button";

export const Header = (props: any) => {
    return (
        <div
        style={{
            backgroundColor: "red",
            height: "60px"
        }}
        >

            <Button text = {"test"} textColor = {"red"} onClickButton = {() => {}}/>
            <Button text = {"home"} textColor = {"red"} onClickButton = {() => {}}/>
            <Button text = {"about me"} textColor = {"red"} onClickButton = {() => {}}/>
            <Button text = {"about the app"} textColor = {"red"} onClickButton = {() => {}}/>
            
        </div>
    )
};
 */
import {Button} from "./Button";

export const Header = (props: any) => {
    return (
        <div
        style={{
            backgroundColor: "red",
            height: "60px"
        }}
        >
            <Button text = {"test"} textColor = {"red"} onClickButton = {{} => {}}/>
            <Button text = {"home"} textColor = {"red"} onClickButton = {{} => {}}/>
            <Button text = {"about me"} textColor = {"red"} onClickButton = {{} => {}}/>
            <Button text = {"about the app"} textColor = {"red"} onClickButton = {{} => {}}/>
        </div>
    )
}