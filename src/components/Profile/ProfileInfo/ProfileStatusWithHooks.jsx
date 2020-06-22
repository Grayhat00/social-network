import React, {useState} from "react";
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let stateWithSetState =  useState(true);

    let [editMode, setEditMode] = useState(true);

    const activateEditMode = () => {
        setEditMode(true);
    }


    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activateEditMode}> {props.status || "------"}</span>
            </div>
            }

            { editMode &&
            <div>
                <input autoFocus={true}/>
            </div>
            }
        </div>
    )


}

export default ProfileStatusWithHooks;

