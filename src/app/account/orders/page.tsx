'use client'

import { useState } from 'react'

interface OrderItem {
  name: string
  quantity: number
  price: number
}

interface Order {
  id: string
  date: string
  total: number
  status: 'Processing' | 'Shipped' | 'Delivered'
  items: OrderItem[]
}

// Mock data - replace with actual API call in production
const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    total: 89.97,
    status: 'Processing',
    items: [
      { name: 'Aspirin 100mg', quantity: 2, price: 19.99 },
      { name: 'Vitamin C 1000mg', quantity: 1, price: 49.99 },
    ],
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    total: 129.95,
    status: 'Delivered',
    items: [
      { name: 'Multivitamin Complex', quantity: 1, price: 79.99 },
      { name: 'First Aid Kit', quantity: 1, price: 49.96 },
    ],
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    total: 159.97,
    status: 'Shipped',
    items: [
      { name: 'Omega-3 Fish Oil', quantity: 2, price: 29.99 },
      { name: 'Probiotics', quantity: 1, price: 99.99 },
    ],
  },
  {
    id: 'ORD-004',
    date: '2024-01-03',
    total: 199.95,
    status: 'Processing',
    items: [
      { name: 'Vitamin D 2000 IU', quantity: 2, price: 29.99 },
      { name: 'Calcium Supplement', quantity: 1, price: 99.99 },
    ],
  },
  {
    id: 'ORD-005',
    date: '2024-01-01',
    total: 79.99,
    status: 'Delivered',
    items: [
      { name: 'Protein Powder', quantity: 1, price: 79.99 },
    ],
  },
  {
    id: 'ORD-006',
    date: '2023-12-30',
    total: 99.99,
    status: 'Shipped',
    items: [
      { name: 'Creatine Supplement', quantity: 1, price: 99.99 },
    ],
  },
  {
    id: 'ORD-007',
    date: '2023-12-25',
    total: 149.99,
    status: 'Processing',
    items: [
      { name: 'BCAAs', quantity: 2, price: 29.99 },
      { name: 'Glutamine Supplement', quantity: 1, price: 99.99 },
    ],
  },
  {
    id: 'ORD-008',
    date: '2023-12-20',
    total: 199.99,
    status: 'Delivered',
    items: [
      { name: 'Mass Gainer', quantity: 1, price: 199.99 },
    ],
  },
  {
    id: 'ORD-009',
    date: '2023-12-15',
    total: 99.99,
    status: 'Shipped',
    items: [
      { name: 'Pre-Workout Supplement', quantity: 1, price: 99.99 },
    ],
  },
  {
    id: 'ORD-010',
    date: '2023-12-10',
    total: 149.99,
    status: 'Processing',
    items: [
      { name: 'Post-Workout Supplement', quantity: 2, price: 29.99 },
      { name: 'Recovery Supplement', quantity: 1, price: 99.99 },
    ],
  },
]

export default function OrdersPage() {
  const [orders] = useState<Order[]>(mockOrders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<Order['status'] | 'All'>('All')
  const [sortBy, setSortBy] = useState<'date' | 'total'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const ordersPerPage = 5

  // Filter and sort orders
  const filteredOrders = orders
    .filter((order) => {
      const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesStatus = statusFilter === 'All' || order.status === statusFilter
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return sortOrder === 'desc'
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime()
      } else {
        return sortOrder === 'desc'
          ? b.total - a.total
          : a.total - b.total
      }
    })

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage)
  const indexOfLastOrder = currentPage * ordersPerPage
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'Shipped':
        return 'bg-blue-100 text-blue-800'
      case 'Delivered':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

        {/* Search and Filter Controls */}
        <div className="mb-6 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>
          <div className="flex space-x-4">
            <select
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as Order['status'] | 'All')
                setCurrentPage(1)
              }}
            >
              <option value="All">All Status</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
            <select
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [newSortBy, newSortOrder] = e.target.value.split('-') as [typeof sortBy, typeof sortOrder]
                setSortBy(newSortBy)
                setSortOrder(newSortOrder)
                setCurrentPage(1)
              }}
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="total-desc">Highest Amount</option>
              <option value="total-asc">Lowest Amount</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {currentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setSelectedOrder(order.id === selectedOrder?.id ? null : order)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Order #{order.id}</h3>
                    <p className="mt-1 text-sm text-gray-500">Placed on {order.date}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <p className="text-lg font-medium text-gray-900">${order.total.toFixed(2)}</p>
                  </div>
                </div>

                {selectedOrder?.id === order.id && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-medium text-gray-900 mb-4">Order Items</h4>
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currentPage === index + 1
                      ? 'z-10 bg-primary-blue border-primary-blue text-white'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        )}

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No orders found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
