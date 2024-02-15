import React, {FormEvent} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import {Head, useForm} from '@inertiajs/react';
import {PageProps} from "@/types";
import Chirp from "@/Pages/Chirps/Chirp";


export default function Index({auth, chirps}: PageProps) {
    const {data, setData, post, processing, reset, errors} = useForm({
        message: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post(route('chirps.store'), {onSuccess: () => reset()});
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Chirps"/>

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2"/>
                    <PrimaryButton className="mt-4" disabled={processing}>Chirp</PrimaryButton>
                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {chirps.map(chirp =>
                        <Chirp key={chirp.id} chirp={chirp}/>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
