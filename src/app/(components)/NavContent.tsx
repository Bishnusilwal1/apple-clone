import React, { Fragment } from "react";

export default function NavContent({ hoveredItem }: any) {
  return (
    <Fragment>
      <div className="bg-[#161617CC]">
        {hoveredItem === "Store" && (
          <div className="flex  py-4">
            {/* First Column */}
            <div className="mt-2 md:mt-4 lg:mt-6 ml:ml">
              <p className="text-gray-400">Shop</p>
              <h3 className="text-white text-xl">Mac</h3>
              <h3 className="text-white text-xl">iPad</h3>
              <h3 className="text-white text-xl">iPhone</h3>
              <h3 className="text-white text-xl">Apple</h3>
            </div>

            {/* Second Column */}
            <div className="mt-2 md:mt-4 lg:mt-6">
              <p className="text-gray-400">Quick Links</p>
              <h3 className="text-white text-xl">Find a Store</h3>
              <h3 className="text-white text-xl">Application</h3>
              <h3 className="text-white text-xl">iPhone</h3>
              <h3 className="text-white text-xl">Apple</h3>
            </div>
          </div>
        )}

        {hoveredItem === "Mac" && (
          <div className="flex gap-8">
            <div>
              <p>Explore Mac</p>
              <h3>Mac</h3>
              <h3>iPad</h3>
              <h3>iPhone</h3>
              <h3>Apple</h3>
            </div>

            <div>
              <p>Shop Mac</p>
              <h3>Find a Store</h3>
              <h3>Application</h3>
              <h3>iPhone</h3>
              <h3>Apple</h3>
            </div>

            <div>
              <p>More from Apple</p>
              <h3>Find a Store</h3>
              <h3>Application</h3>
              <h3>iPhone</h3>
              <h3>Apple</h3>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
