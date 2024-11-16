import React from 'react'

const page = () => {
  return (
    <section className="py-12 xl:py-24 xl:h-[145vh] xl:pt-[220px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-sans)]">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span>Home</span>
            <span>|</span>
            <span>Tiket</span>
          </div>

          <div className="flex gap-8">
           

            {/* Right Side - Form & Ticket List */}
            <div className="flex-1">
              {/* Form Tiket */}
              <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Buat Tiket Baru</h2>
                
                <form className="space-y-6">
                  {/* Keperluan */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Keperluan</label>
                    <select className="w-full px-4 py-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700">
                      <option value="">Pilih Keperluan</option>
                      <option value="konsultasi">Konsultasi IT</option>
                      <option value="development">Development Project</option>
                      <option value="mentoring">Mentoring/Tutorial</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  {/* Deskripsi */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Deskripsi Kebutuhan</label>
                    <textarea 
                      className="w-full px-4 py-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700"
                      rows={4}
                      placeholder="Jelaskan detail kebutuhan Anda..."
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Tanggal */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Tanggal yang Diinginkan</label>
                      <input 
                        type="date"
                        className="w-full px-4 py-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700"
                      />
                    </div>

                    {/* Waktu */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Waktu yang Diinginkan</label>
                      <select className="w-full px-4 py-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700">
                        <option value="">Pilih Waktu</option>
                        <option value="pagi">09:00 - 12:00</option>
                        <option value="siang">13:00 - 15:00</option>
                        <option value="sore">15:00 - 17:00</option>
                      </select>
                    </div>
                  </div>

                  {/* Prioritas */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Tingkat Prioritas</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="priority" value="low" className="mr-2"/>
                        <span className="text-sm">Rendah</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="priority" value="medium" className="mr-2"/>
                        <span className="text-sm">Sedang</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="priority" value="high" className="mr-2"/>
                        <span className="text-sm">Tinggi</span>
                      </label>
                    </div>
                  </div>

                  {/* Kontak */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Kontak yang Bisa Dihubungi</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700"
                      placeholder="Email atau nomor telepon"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Kirim Tiket
                  </button>
                </form>
              </div>

              {/* Daftar Tiket Saya */}
              <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Tiket Saya</h2>
                <div className="space-y-4">
                  {/* Sample Ticket Item */}
                  <div className="border dark:border-zinc-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Konsultasi IT</h3>
                        <p className="text-sm text-muted-foreground">Submitted on: 1 Jan 2024</p>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100">
                        Pending
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Konsultasi mengenai arsitektur sistem</p>
                    <div className="flex justify-between text-sm">
                      <span>Prioritas: Tinggi</span>
                      <span>Jadwal: 3 Jan 2024, 09:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default page