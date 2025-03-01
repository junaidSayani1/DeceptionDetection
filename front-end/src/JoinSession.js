import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { ArrowUpCircle } from "react-bootstrap-icons";

function JoinSession({ statusMessage, setStatusMessage }) {
  const [sessionCode, setSessionCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleJoinClick = () => {
    setShowModal(true);
  };

  const handleClose = (file) => {
    setShowModal(false);
    if (file) {
      setUploadedFile(file);
      setStatusMessage("Processing Data and Generating Report!");
    } else {
      setUploadedFile(null);
    }
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "video/*",
    multiple: false,
  });

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      {/* <h4 className="fw-bold">{statusMessage}</h4> */}
      <h5>Enter Session Code:</h5>
      <div className="d-flex">
        <Form.Control
          type="text"
          value={sessionCode}
          onChange={(e) => setSessionCode(e.target.value)}
          placeholder="Session Code"
          className="me-2"
        />
        <Button variant="primary" onClick={handleJoinClick}>Join</Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => handleClose(uploadedFile)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Upload your video file</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            {...getRootProps()}
            className="border border-dashed p-5 text-center position-relative d-flex justify-content-center align-items-center"
            style={{ cursor: "pointer", borderRadius: "8px", minHeight: "300px", position: "relative" }}
          >
            <input {...getInputProps()} />
            {!uploadedFile && (
              <div className="position-absolute text-muted d-flex flex-column align-items-center" style={{ opacity: 0.3 }}>
                <ArrowUpCircle size={100} />
                <p>Drag & drop your video here or click to upload</p>
              </div>
            )}
            {uploadedFile && <p className="mt-4">{uploadedFile.name}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleClose(uploadedFile)}>
            Upload!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default JoinSession;
