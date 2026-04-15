import { motion } from 'motion/react';
import { AlertCircle, ArrowLeft, Home, Search } from 'lucide-react';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(70,64,194,0.08),_transparent_28%),_white] py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-[34px] border border-[#dde3ff] bg-white p-8 shadow-[0_28px_80px_rgba(37,56,134,0.12)] md:p-12"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eef1ff]">
            <AlertCircle className="h-10 w-10 text-[#4640c2]" />
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#5d66a7]">
            Error 404
          </p>
          <h1 className="mt-4 text-5xl font-bold text-[#131d3a] md:text-6xl">Page Not Found</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5f688c]">
            The page you are looking for does not exist, may have moved, or the URL may be incorrect.
          </p>

          <div className="mt-10 grid gap-4 rounded-[26px] border border-[#e1e6ff] bg-[#f8f9ff] p-5 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e2e7ff] bg-white p-4">
              <Search className="h-6 w-6 text-[#4640c2]" />
              <h2 className="mt-4 text-lg font-semibold text-[#16203f]">Check The URL</h2>
              <p className="mt-2 text-sm leading-6 text-[#66708d]">
                A small spelling mistake in the address can lead to a missing page.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e2e7ff] bg-white p-4">
              <Home className="h-6 w-6 text-[#4640c2]" />
              <h2 className="mt-4 text-lg font-semibold text-[#16203f]">Go Somewhere Safe</h2>
              <p className="mt-2 text-sm leading-6 text-[#66708d]">
                Return home or browse products to continue shopping without losing momentum.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 18px 35px rgba(70, 64, 194, 0.28)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer rounded-2xl bg-[#4640c2] px-8 py-4 font-semibold text-white transition-all hover:bg-[#3b35a5] shadow-[0_16px_35px_rgba(70,64,194,0.28)] sm:w-auto"
              >
                Back To Home
              </motion.button>
            </Link>

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-2xl border border-[#cfd6ff] bg-white px-8 py-4 font-semibold text-[#1f2747] transition-all hover:bg-[#f3f5ff] sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                Browse Products
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
