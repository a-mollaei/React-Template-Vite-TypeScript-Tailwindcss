import {useState} from 'react';
import {salesData} from '../Mock/SalesData';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {subMonths, subYears, isAfter, parseISO} from 'date-fns';
import CategoryFilter from '../hooks/CategoryFilter';

interface SalesData {
    name: string ;
    sales: number ;
    category: string;
}

const SalesChart : React.FC = () => {
    const [filter, setFilter] = useState<'month' | 'six-month' | 'year' | 'all'>('month') ;
    const {selectedCategory, setSelectedCategory, filteredProducts, categories} = CategoryFilter(salesData);

    const getFilterData = (): SalesData[] => {
        const now = new Date() ;
        let startDate : Date ;

        switch (filter) {
            case 'month':
                startDate = subMonths(now, 1);
                break;
            case 'six-month' :
                startDate = subMonths(now, 6);
                break;
            case 'year':
                startDate = subYears(now, 1);
                break;
            case 'all':
                startDate = new Date(0);
        }
    const SalesMap = new Map<string, number>();

    salesData.forEach((sale) => {
        const salesDate = parseISO(sale.soldDate);
        if (isAfter(salesDate, startDate)) {
            SalesMap.set(sale.name, (SalesMap.get(sale.name) || 0) + sale.soldQuantity);
        }
    });
    return Array.from(SalesMap, ([name, sales]) => ({name , sales} as SalesData));

    };

    const data = getFilterData();

    return (
        <div className='w-full mx-auto p-4 bg-gray-900 rounded-lg shadow'>
            <h2 className='text-xl font-bold mb-4 text-center'> Sale Chart ! </h2>

            <div className='flex justify-center space-x-2 mb-4'>
                
                {['month', 'six-month', 'year', 'all'].map((period) => (
                    <button
                        key={period}
                        className={`px-4 py-2 text-sm rounded ${filter === period ? 'bg-blue-500 text-white' : 'bg-gray-700'}`}
                        onClick={() => setFilter(period as 'month' | 'six-month' | 'year' | 'all')}
                        >
                            {period === 'month' ? 'month' : period === 'six-month' ? 'six-month' : period === 'year' ? 'year' : 'all'}
                        </button>
                ))}
            </div>
            <div className='flex justify-center space-x-2 mb-4'>
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className='px-4 py-2 bg-gray-700 text-white rounded'>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))};
                    </select>
            </div>
            <div className='chart-container' style={{width:'100%', height:'500px', backgroundColor: '#1f2937', borderRadius:'8px', padding:'10px'}}>
                <ResponsiveContainer width='100%' height={500}>
                    <LineChart data = {data}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' angle={-90} textAnchor='end' height={200} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type='monotone' dataKey='sales' stroke='#8884d8' strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesChart ;