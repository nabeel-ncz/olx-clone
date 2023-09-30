import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePostForm } from '../../hooks/usePostForm';
import { storage, db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { firebaseContext } from '../../store/firebaseContext';
import SellHeader from '../SellHeader/SellHeader';

const CreatePost = () => {
    const user = useContext(firebaseContext);
    const navigate = useNavigate();
    const [query, setQuery] = useState(null);
    const [search] = useSearchParams();
    const [form, setForm, handleForm] = usePostForm({
        title: '', description: '', price: '', imageUrl: '', state: '', city: ''
    })
    const [image, setImage] = useState(null);
    const [imageBlob, setImageBlob] = useState(null);
    useEffect(() => {
        const category = search.get('category');
        const categTitle = search.get('title');
        setQuery({ category, categTitle });
    }, []);

    const handleUploadImage = (event) => {
        const url = URL.createObjectURL(event.target.files[0]);
        setImage(url);
        setImageBlob(event.target.files[0]);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const storageRef = ref(storage, `products/${imageBlob.name}`);
        uploadBytes(storageRef, imageBlob).then(({ metadata }) => {
            getDownloadURL(storageRef).then((url) => {
                addDoc(collection(db, "products"), {
                    userId: user.userId,
                    createdAt: new Date().toLocaleString(),
                    ...form,
                    category: query.category,
                    subCategory: query.categTitle,
                    imageUrl: url,
                }).then(() => {
                    console.log('submitted successfully');
                }).catch(() => {
                    console.log('error occurd!');
                })
            })
        })
    }

    return (
        <>
            <SellHeader />
            <div className='create-post-container px-32 pt-2'>
                <h4 className='w-full text-center text-2xl py-4'>POST YOU AD</h4>
                <div className="form-container border-2 rounded">
                    <form action="" onSubmit={handleFormSubmit}>
                        <div className="form-item border-b px-6 py-4 flex flex-col gap-4">
                            <h4>SELECTED CATEGORY</h4>
                            <div className='flex items-center gap-4'>
                                <h6 className='text-xs text-slate-600'>{query?.category} / {query?.categTitle}</h6>
                                <h6 className='text-xs underline cursor-pointer' onClick={() => navigate(-1)}>Change</h6>
                            </div>
                        </div>
                        <div className="form-items border-b px-6 py-4 flex flex-col gap-4">
                            <h4 className='w-full'>INCLUDE SOME DETAILS</h4>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>Ad title</h6>
                                <input type="text" name='title' value={form.title} onChange={handleForm} className='focus:outline-none border-2 px-4 py-2 w-1/2' />
                            </div>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>Description</h6>
                                <input type="text" name='description' value={form.description} onChange={handleForm} className='focus:outline-none border-2 px-4 py-2 w-1/2' />
                            </div>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>Set a price</h6>
                                <input type="text" name='price' value={form.price} onChange={handleForm} className='focus:outline-none border-2 px-4 py-2 w-1/2' />
                            </div>
                        </div>
                        <div className="form-items border-b px-6 py-4 flex flex-col gap-4">
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>Upload a photo</h6>
                                <input type="file" onChange={handleUploadImage} name='imageUrl' className='border-2 px-4 py-2 w-1/2 text-sm font-normal' />
                                <div className='py-4'>
                                    {image ?
                                        <img src={image ? image : ""} alt="" className='w-10 h-10' />
                                        : <h4 className='text-xs font-normal'>Loading...</h4>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="form-items border-b px-6 py-4 flex flex-col gap-4">
                            <h4 className='w-full'>CONFIRM YOUR LOCATION</h4>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>State</h6>
                                <select name="state" value={form.state} onChange={handleForm} id="" className='border-2 px-4 py-2 w-1/2 text-sm font-normal'>
                                    <option value="kerala">kerala</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="TamilNadu">TamilNadu</option>
                                </select>
                            </div>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>City</h6>
                                <select name="city" value={form.city} onChange={handleForm} id="" className='border-2 px-4 py-2 w-1/2 text-sm font-normal'>
                                    <option value="palakkad">Palakkad</option>
                                    <option value="malappuram">Malappuram</option>
                                    <option value="calicut">Calicut</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-items border-b px-6 py-4 flex flex-col gap-4">
                            <button type='submit' className='w-max px-6 py-2 bg-emerald-900 rounded text-base font-medium text-white'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost;