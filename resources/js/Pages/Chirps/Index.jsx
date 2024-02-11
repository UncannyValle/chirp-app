import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({auth}) {
    const {data, setData, post, processing, reset, errors} = useForm({
        message: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('chirps.store'), {onSuccess: () => reset()})
    }

    return (
        <AuthenticatedLayout>

        </AuthenticatedLayout>
    )
}
