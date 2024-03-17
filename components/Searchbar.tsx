"use client"

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";


const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if (
            hostname.includes('amazon.in') ||
            hostname.includes('amazon.') ||
            hostname.includes('amazon')
        ) {
            return true;
        }
    } catch (error) {

    }

    return false;
}
const Searchbar = () => {
    const [searchPromt, setSearchPromt] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPromt);

        if (!isValidLink) return alert('Please provide a valid Amazon link')

        try {
            setIsLoading(true)

            //scrap the product page
            const product = await scrapeAndStoreProduct(searchPromt)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <form
            className='flex flex-wrap gap-4 mt-12'
            onSubmit={(handleSubmit)}
        >
            <input
                type="text"
                value={searchPromt}
                onChange={(e) => setSearchPromt(e.target.value)}
                placeholder="Enter product link"
                className="searchbar-input"
            />

            <button
                className="searchbar-btn"
                type="submit"
                disabled={searchPromt === ''}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    )
}

export default Searchbar
