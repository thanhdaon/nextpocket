"use client";

function SigninForm() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <div className="grid gap-1">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="name@example.com"
            className="my-0 mb-2 block h-9 w-full rounded-md border border-slate-300 py-2 px-3 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            name="email"
          />
          <input
            id="password"
            placeholder="**********"
            className="my-0 mb-2 block h-9 w-full rounded-md border border-slate-300 py-2 px-3 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
            type="password"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            name="email"
          />
        </div>

        <button className="inline-flex w-full items-center justify-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500">
          Signin
        </button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-slate-500">Or continue with</span>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;
