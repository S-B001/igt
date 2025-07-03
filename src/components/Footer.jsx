import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-white text-[#0F2137] py-12 px-6 md:px-12'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-300 pt-5' >
            {/* column 1 */}
           <div>
             <h4 className='text-lg font-semibold mb-4' >About Us</h4>
              <ul className='space-y-2 text-sm text-[#02073E]'>
                <li>Support Center</li>
                <li>Customer Support</li>
                <li>About Us</li>
                <li>Copyright</li>
                <li>Popular Campaign</li>
              </ul>
           </div>

           {/* column 2  */}
            {/* colum */}
           <div>
             <h4 className='text-lg font-semibold mb-4' >Our Information</h4>
              <ul className='space-y-2 text-sm text-[#02073E]'>
                <li>Return Policy </li>
                <li>Privacy Policy</li>
                <li>Terms & Conditionss</li>
                <li>Site Map</li>
                <li>Store Hours</li>
              </ul>
           </div>

           {/* column 3  */}
            {/* colum */}
           <div>
             <h4 className='text-lg font-semibold mb-4' >About Us</h4>
              <ul className='space-y-2 text-sm text-[#02073E]'>
                <li>Support Center</li>
                <li>Customer Support</li>
                <li>About Us</li>
                <li>Copyright</li>
                <li>Popular Campaign</li>
              </ul>
           </div>

           {/* column 4 */}
            {/* colum */}
           <div>
             <h4 className='text-lg font-semibold mb-4' >My Account</h4>
              <ul className='space-y-2 text-sm text-[#02073E]'>
                <li>Press inquiries</li>
                <li>Social media </li>
                <li>directories</li>
                <li>Images & B-roll</li>
                <li>Permissions</li>
              </ul>
           </div>
        </div>
    </footer>
  )
}
