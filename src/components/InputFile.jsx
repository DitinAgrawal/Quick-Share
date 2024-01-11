"use client"

import React, { useEffect, useState } from 'react';
import { storage } from "../Config/firebase"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from "uuid"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const InputFile = () => {

    const [file, setFile] = useState(null)
    const [fileURL, setFileURL] = useState("")
    useEffect(() => { }, [file]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (file == null) return (
            Swal.fire({
                title: 'Error!',
                text: 'Please select a file to upload',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        );
        const imageRef = ref(storage, `files/${file.name + v4()}`)
        const snapshot = await uploadBytes(imageRef, file)
        if (snapshot) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Download link copied successfully",
                showConfirmButton: false,
                timer: 2500
            });
        }
        getDownloadURL(ref(storage, snapshot.ref.fullPath)).then(download => {
            setFileURL(download)
            navigator.clipboard.writeText(download)
        })
        setFile(null)
    }
    return (
        <form className="flex flex-col items-center justify-center w-11/12 mx-auto" onSubmit={handleSubmit}>
            <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
                {
                    file ? (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <img src="/file.png" className='w-24 h-24' />
                            <p className="m-2 text-md text-gray-500">
                                {file.name}
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-12 h-12 mb-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 tracking-wider">
                                IMG, PDF, GIF, MP3 or MP4
                            </p>
                        </div>
                    )
                }
                <input id="dropzone-file" name="file" type="file" className="hidden"
                    onChange={(e) => setFile(e.target.files[0])} />
            </label>
            <button
                className="block rounded-lg bg-indigo-600 px-10 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring mt-6"
                type="submit"
            >
                Upload
            </button>
        </form>
    );
};

export default InputFile;