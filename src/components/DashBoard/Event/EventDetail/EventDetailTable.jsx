import React from 'react';
import { toast } from 'react-toastify';
import EnhancedTable from '../../../common/table';
import usePaginationAsync from '../../../hook/usePaginationAsync';
import eventService from '../eventService';

export default function EventDetailTable({ eventId }) {
    async function getListTicket(params) {
        try {
            const res = await eventService.getListTicket(params, eventId);
            return res;
        } catch (error) {
            toast(error.response.data.message);
        }
        return null;
    }

    const { Pagination, loading, fetchData, onChange, data } = usePaginationAsync(
        { apiService: getListTicket }
    )
    return (
        <>
            <EnhancedTable />
            <Pagination />
        </>
    )
}