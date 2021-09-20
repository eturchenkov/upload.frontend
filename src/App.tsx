import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import { userService } from "services/userService"

export const App = () => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  return (
    <Root>
      <header className="header">File uploader</header>
      <div className="block">
        {selectedFile ? (
          <button
            onClick={() => {
              const formData = new FormData()
              formData.append("uploadedFile", selectedFile, selectedFile.name)
              userService
                .uploadFile(formData)
                .then(() => setSelectedFile(undefined))
            }}
          >
            Upload the file!
          </button>
        ) : (
          <>
            <span>Select one file</span>
            <input
              className="input"
              type="file"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSelectedFile(e.target.files?.[0])
              }}
            />
          </>
        )}
      </div>
    </Root>
  )
}
const Root = styled.div`
  width: 400px;
  margin: auto;
  .header {
    margin: 30px;
    font-size: 32px;
    text-align: center;
  }
  .block {
    text-align: center;
  }
  .input {
    margin-left: 20px;
  }
`
