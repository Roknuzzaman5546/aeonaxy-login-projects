
const Progress = ({ value }) => {
    return (
        <div>
            <progress className="progress progress-success w-full block" value={value} max="100"></progress>
        </div>
    );
};

export default Progress;