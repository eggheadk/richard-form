import React from "react";
import { toast } from "react-toastify";
import Button from "../../components/button";
import Dropdown from "../../components/dropdown";
import Input from "../../components/input";
import List from "../../components/list";
import { validateStr } from "../../useStore";
import DatePicker  from "../../components/date-picker"

import './style.css';
import moment from "moment";

export default function () {

    const [data, setData] = React.useState({});
    const set = ({ ...obj }) => setData({ ...data, ...obj });

    const submit = () => {
        const { name, status, contractdate, jobtitle, officelocation, manager, employee } = data;
        if (!validateStr(name))
            toast("Please input the employee name");
        else if (status === undefined)
            toast("Please select the employee status");
        else if (!validateStr(contractdate))
            toast("Please select the contract date");
        else if (!validateStr(jobtitle))
            toast("Please input job title");
        else if (officelocation === undefined)
            toast("Please select office location");
        else if (!validateStr(manager))
            toast("Please input hiring manager");
        else if (!validateStr(employee))
            toast("Please input employee with similar");
        else
            toast("Submit your profile successfully");
    }

    return (
        <div className="agency">
            <form>
                <h2>
                    Form 2
                </h2>
                <div>
                    <Input
                        name="name"
                        value={data.name || ""}
                        onChange={(e) => set({ [e.target.name]: e.target.value })}
                        placeholder={"Employee Name"}
                    />
                    <Dropdown
                        name="status"
                        initialLabel={"Select an employee status"}
                        label={data.status !== undefined ? data.status.label : undefined}
                        onSelect={(i, k) => set({ status: i })}
                        placeholder={"Employment Status"}
                        container={(onClose) => (
                            <List
                                items={[
                                    { label: "Full Time" },
                                    { label: "Part Time" },
                                    { label: "Contractor" }
                                ]}
                                labelKey={"label"}
                                onSelect={(item) => { onClose && onClose(); set({ status: item }) }}
                            />
                        )}
                    />
                    <DatePicker
                        initialLabel={"Contract Date"}
                        label={data.contractdate === undefined ? undefined : moment(data.contractdate).format("YYYY/MM/DD")}
                        onChange={(d) => set({ contractdate: d })}
                    />
                    <Input
                        name="jobtitle"
                        value={data.jobtitle || ""}
                        onChange={(e) => set({ [e.target.name]: e.target.value })}
                        placeholder={"Job Title"}
                    />
                    <Dropdown
                        name="officelocation"
                        initialLabel={"Select a office location"}
                        label={data.officelocation !== undefined ? data.officelocation.label : undefined}
                        onSelect={(i, k) => set({ officelocation: i })}
                        placeholder={"Office Location"}
                        container={(onClose) => (
                            <List
                                items={[
                                    { label: "Sydney" },
                                    { label: "Melbourne" }
                                ]}
                                labelKey={"label"}
                                onSelect={(item) => { onClose && onClose(); set({ officelocation: item }) }}
                            />
                        )}
                    />
                    <Input
                        name="manager"
                        value={data.manager || ""}
                        onChange={(e) => set({ [e.target.name]: e.target.value })}
                        placeholder={"Hiring manager"}
                    />
                    <Input
                        name="employee"
                        value={data.employee || ""}
                        onChange={(e) => set({ [e.target.name]: e.target.value })}
                        placeholder={"Employee with similar access"}
                    />
                </div>
                <Button
                    type="button"
                    onClick={submit}
                >Next</Button>
            </form>
        </div>
    )
}