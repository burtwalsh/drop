import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './App.css'
import FormDialog from './FormDialog'
import OpenSelect from './OpenSelect'


function MyDropzone() {

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {

      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {

	document.getElementById("mine").innerHTML = "Done"
        const binaryStr = reader.result
	//make the modal visible
	//object array bufferalert(binaryStr)
        //should try to determine the data type
        var json = JSON.parse(binaryStr)
	alert(Object.keys(json))
      }
//      reader.readAsArrayBuffer(file)
       reader.readAsText(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

 
  return (
  <>
  <p id="mine">INFO HERE</p>
  <div class="widget">
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      Drag and Drop files or Click for an upload dialog
    </div>
  </div>
  <div class="widget" id="graph"></div>
      <FormDialog></FormDialog>
      <OpenSelect></OpenSelect>
   </>
  )
}

export default MyDropzone;
