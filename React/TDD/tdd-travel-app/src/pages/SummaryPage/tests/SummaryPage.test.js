import SummaryPage from "../SummaryPage";
import {render, screen} from "@testing-library/react";

test("checkbox and button", ()=>{
    render(<SummaryPage/>);
    const checkbox = screen.getByRole('checkbox', {
        name:"주문하려는 것을 확인하셨나요?"//label의 name과 같아야 한다.
    });

    expect(checkbox.checked).toEqual(false);

    const confirmButton = screen.getByRole("button", {name:"주문 확인"});
    expect(confirmButton.disabled).toBeTruthy();
})