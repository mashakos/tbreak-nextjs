export default function ContactMail() {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 md:max-w-2xl md:px-8 lg:max-w-none lg:px-0 lg:pr-48">
      <h3 className="relative border-b border-gray-300/70 pb-2.5 text-2xl font-medium text-secondaryblue before:absolute before:-bottom-px before:left-0 before:h-px before:w-24 before:bg-red-600 before:content-['']">
        Send us mail
      </h3>

      {/* Content */}
      <div className="relative mt-8">
        <div>
          <div className="space-y-1 text-md">
            <p className="text-secondaryblue">Tbreak Magazine</p>
            <p className="text-secondaryblue">PO Box 12345</p>
            <p className="text-secondaryblue">Dubai, AE 49548</p>
          </div>
        </div>
        <div className="prose mt-8 text-md text-gray-500 prose-a:text-gray-800 prose-a:transition prose-a:duration-300 prose-a:ease-in-out prose-a:hover:text-primaryred">
          Lorem ipsum dolor sit amet ornare arcu bibendum nunc. Phasellus
          praesent nisi malesuada imperdiet ac velit massa velit lacus hendrerit
          etiam nec.
        </div>
      </div>
    </div>
  )
}
