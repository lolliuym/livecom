import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCirclePlay, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import "./createPost.css"

const CreatePost = () => {
  return (
    <div className="box py-2 px-4" >
    <form>
        <div className="row d-flex  ">
            <div className="col-1 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img className="d-flex rounded-circle" width="50px" height="50px" src="../images/avatar.jpg" />

                  </div>
            </div>
            <div className="col-8">
              <textarea className="form-control border-none" placeholder="Что у вас нового?" rows={1}></textarea>
              </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-between align-items-center w-100 ">
                    <div><FontAwesomeIcon icon={faCamera} /></div>
                    <div><FontAwesomeIcon icon={faCirclePlay} /></div>
                    <div><FontAwesomeIcon icon={faMusic} /></div>
                    <div><FontAwesomeIcon icon={faFileLines} /></div>
                </div>
            </div>
        </div>
    </form>
</div>
  )
}

export default CreatePost
