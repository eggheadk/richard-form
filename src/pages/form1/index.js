import React from "react";
import { toast } from "react-toastify";
import Button from "../../components/button";
import Input from "../../components/input";
import Panel from "../../components/panel";
import DatePicker from "../../components/date-picker";
import { getOnlyNumber, validateEmail, validatePhone, validateStr } from "../../useStore";

import './style.css';
import moment from "moment/moment";

export default function () {

    const [data, setData] = React.useState({});
    const set = ({ ...obj }) => setData({ ...data, ...obj });

    const submit = () => {
        const { firstname, surname, businessphone, mobile, email, birth } = data;
        if (!validateStr(firstname))
            toast("Please input the first name");
        else if (!validateStr(surname))
            toast("Please input the surname")
        else if (!validateStr(businessphone))
            toast("Please input the business phone number")
        else if (!validatePhone(businessphone))
            toast("Invalid phone number")
        else if (!validateStr(mobile))
            toast("Please input mobile number")
        else if (!validatePhone(mobile))
            toast("Invalid mobile number")
        else if (!validateStr(email))
            toast("Please input the email")
        else if (!validateEmail(email))
            toast("Invalid email")
        else if (birth === undefined)
            toast("Please select the birthday")
        else
            toast("Submit your profile successfully")
    }

    return (
        <div className="agency">
            <form onSubmit={submit}>
                <h2>
                    Form 1
                </h2>
                <div>
                    <Panel
                        header={"Application"}
                    >
                        <div className="flex flex-wrap">
                            <label className="flex gap">
                                <input type={"checkbox"} />
                                <span>SYSTEM NOC1</span>
                            </label>
                            <label className="flex gap">
                                <input type={"checkbox"} />
                                <span>SYSTEM NOC2</span>
                            </label>
                            <label className="flex gap">
                                <input type={"checkbox"} />
                                <span>SYSTEM NOC3</span>
                            </label>
                            <label className="flex gap">
                                <input type={"checkbox"} />
                                <span>SYSTEM NOC4</span>
                            </label>
                        </div>
                    </Panel>
                    <Input
                        name="firstname"
                        value={data.firstname || ""}
                        onChange={(e) => set({ [e.target.name]: e.target.value })}
                        placeholder={"First Name"}
                    />
                    <Input
                        name="surname"
                        value={data.surname || ""}
                        onChange={(e) => set({ [e.target.name]: e.target.value })}
                        placeholder={"Surname"}
                    />
                    <Input
                        type={"tel"}
                        name="businessphone"
                        value={data.businessphone || ""}
                        onChange={(e) => set({ [e.target.name]: getOnlyNumber(e.target.value) })}
                        placeholder={"Business Hours Phone Number"}
                    />
                    <Input
                        type={"tel"}
                        name="mobile"
                        value={data.mobile || ""}
                        onChange={(e) => set({ [e.target.name]: getOnlyNumber(e.target.value) })}
                        placeholder={"Mobile Number"}
                    />
                    <Input
                        type="email"
                        name="email"
                        value={data.email || ""}
                        onChange={(e) => set({ [e.target.name]: e.target.value })}
                        placeholder={"Email Address"}
                    />
                    <DatePicker
                        initialLabel={"Your birthday"}
                        label={data.birth === undefined ? undefined : moment(data.birth).format("YYYY/MM/DD")}
                        onChange={(d) => set({ birth: d })}
                    />
                </div>
                <Button
                    type="button"
                    onClick={submit}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}