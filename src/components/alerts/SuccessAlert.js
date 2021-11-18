import './Alert.css'

export const SuccessAlert = (open) => {

    console.log(open);

    return (
        <div className="success-msg">
            <i className="fa fa-check"></i>
            <span>This is a success message.</span>
        </div>
    )
}
