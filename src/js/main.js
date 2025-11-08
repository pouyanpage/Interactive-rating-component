export default function () {
    return ` <div class="flex w-full justify-center items-center h-screen bg-gray-950">
        <div class="flex flex-col gap-y-7 bg-gray-900 w-96 p-8 rounded-2xl">
            <!-- top icon -->
            <div class="bg-gray-700 rounded-full p-3.5 w-10 h-10">
                <img src="/images/icon-star.svg" alt="123">
            </div>
            <!-- header -->
            <div class="text-white text-2xl">
                <h1>How did we do?</h1>
            </div>
            <div class="text-gray-400">
                <p>please let us know how we did with your support request. All feedback is appreciated to help us improve our
                    offering!</p>
            </div>
            <!-- numbers -->
            <div class="options text-gray-700 flex gap-x-4 mx-auto *:hover:bg-amber-700 *:hover:text-black">
                <button data-number="1" class="numbers">1</button>
                <button data-number="2" class="numbers">2</button>
                <button data-number="3" class="numbers">3</button>
                <button data-number="4" class="numbers">4</button>
                <button data-number="5" class="numbers">5</button>
            </div>
            <button
                class="submit bg-amber-700 hover:bg-amber-100 py-2 rounded-full mx-2 font-bold cursor-pointer">SUBMIT</button>
        </div>
    </div>`
}