import { Calendar, ChevronRight } from 'lucide-react'
import React from 'react'

const footer = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Get Involved</h2>
            <button
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-900 font-medium">Schedule a meeting</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
  ) 
}

export default footer