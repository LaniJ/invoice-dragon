import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
};

const focusedStyle = {
    borderColor: "#2196f3",
};

const acceptStyle = {
    borderColor: "#00e676",
};

const rejectStyle = {
    borderColor: "#ff1744",
};

export const FileUpload = ({ onFileUpload }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            acceptedFiles.forEach((file) => {
                const reader = new FileReader();

                reader.onload = (event) => {
                    try {
                        const jsonData = JSON.parse(event.target.result);
                        onFileUpload(jsonData); // Pass the parsed JSON data to the callback
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                        // Handle the error, e.g., display an error message to the user
                    }
                };

                reader.readAsText(file);
            });
        },
        [onFileUpload]
    );

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        onDrop,
        accept: "application/json",
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isFocused, isDragAccept, isDragReject]
    );

    return (
        <div className="container" style={{marginTop: 20}}>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag and drop a JSON file here, or click to select one</p>
            </div>
        </div>
    );
};
