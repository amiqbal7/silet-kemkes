import React from "react";

const Peserta = () => {
  return (
    <div className="px-12 py-16">
      <h1 className="text-xl md:text-3xl text-center lg:px-72 md:px-40  font-bold pb-7">
        Total Peserta Lulus & Aktif Berdasarkan Propinsi
      </h1>
      <div className="border border-gray-400 p-5 rounded-md">
        <div className="overflow-auto">
          <table className="w-full text-sm text-left text-blackborder-2 border-cyan-600">
            <thead class="text-lg  uppercase  ">
              <tr className="text-center ">
                <th scope="col" className="px-3 py-2 border-2 border-cyan-600">
                  No
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-cyan-600">
                  Provinsi
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2005
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2006
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2007
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2008
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2009
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2010
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2011
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2012
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2013
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2014
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2015
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2016
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2017
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2018
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2019
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2020
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2021
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2022
                </th>
                <th scope="col" className="px-5 py-3 border-2 border-cyan-600">
                  2023
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-cyan-600">
                  Tidak Dalam Periode
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-cyan-600">
                  Jumlah
                </th>
              </tr>
            </thead>

            <tbody className="border border-cyan-600">
              {/* 1 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Aceh</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">54</td>
                <td className="px-6 py-4 border-2 border-cyan-600">43</td>
                <td className="px-6 py-4 border-2 border-cyan-600">59</td>
                <td className="px-6 py-4 border-2 border-cyan-600">40</td>
                <td className="px-6 py-4 border-2 border-cyan-600">38</td>
                <td className="px-6 py-4 border-2 border-cyan-600">25</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">29</td>
                <td className="px-6 py-4 border-2 border-cyan-600">32</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  4
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">467</td>
              </tr>

              {/* 2 */}
              <tr className="    text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Sumatra Utara
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">61</td>
                <td className="px-6 py-4 border-2 border-cyan-600">76</td>
                <td className="px-6 py-4 border-2 border-cyan-600">47</td>
                <td className="px-6 py-4 border-2 border-cyan-600">35</td>
                <td className="px-6 py-4 border-2 border-cyan-600">30</td>
                <td className="px-6 py-4 border-2 border-cyan-600">37</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  9
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">425</td>
              </tr>

              {/* 3 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Sumatra Barat
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">27</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">41</td>
                <td className="px-6 py-4 border-2 border-cyan-600">55</td>
                <td className="px-6 py-4 border-2 border-cyan-600">58</td>
                <td className="px-6 py-4 border-2 border-cyan-600">41</td>
                <td className="px-6 py-4 border-2 border-cyan-600">46</td>
                <td className="px-6 py-4 border-2 border-cyan-600">27</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  15
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">434</td>
              </tr>

              {/* 4 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Riau</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">48</td>
                <td className="px-6 py-4 border-2 border-cyan-600">30</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  2
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">263</td>
              </tr>

              {/* 5 */}
              <tr className="    text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Jambi</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">35</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  1
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">232</td>
              </tr>

              {/* 6 */}
              <tr className="    text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Sumatra Selatan
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">25</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  8
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">214</td>
              </tr>

              {/* 7 */}
              <tr className="    text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Bengkulu</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">25</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  8
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">214</td>
              </tr>

              {/* 8 */}
              <tr className="    text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Lampung</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">29</td>
                <td className="px-6 py-4 border-2 border-cyan-600">29</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  5
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">205</td>
              </tr>

              {/* 9 */}
              <tr className="    text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Kepulauan Bangka Belitung
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  0
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-cyan-600">121</td>
              </tr>

              {/* 10 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Kepulauan Riau
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">29</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  2
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">137</td>
              </tr>

              {/* 11 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Jawa Barat
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">28</td>
                <td className="px-6 py-4 border-2 border-cyan-600">41</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">25</td>
                <td className="px-6 py-4 border-2 border-cyan-600">39</td>
                <td className="px-6 py-4 border-2 border-cyan-600">63</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  0
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">343</td>
              </tr>

              {/* 12 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Jawa Tengah
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">71</td>
                <td className="px-6 py-4 border-2 border-cyan-600">78</td>
                <td className="px-6 py-4 border-2 border-cyan-600">57</td>
                <td className="px-6 py-4 border-2 border-cyan-600">62</td>
                <td className="px-6 py-4 border-2 border-cyan-600">54</td>
                <td className="px-6 py-4 border-2 border-cyan-600">34</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">27</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  1
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">540</td>
              </tr>

              {/* 13 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  D.I. Yogyakarta
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">40</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  1
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">161</td>
              </tr>

              {/* 14 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Jawa Timur
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">40</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  1
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">161</td>
              </tr>

              {/* 15 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Banten</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  1
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">150</td>
              </tr>

              {/* 16 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Bali</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">25</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  0
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">195</td>
              </tr>

              {/* 17 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Nusa Tenggara Barat
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  6
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">210</td>
              </tr>

              {/* 18 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Nusa Tenggara Timur
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">42</td>
                <td className="px-6 py-4 border-2 border-cyan-600">34</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">33</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  10
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">262</td>
              </tr>

              {/* 19 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Kalimantan Barat
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">25</td>
                <td className="px-6 py-4 border-2 border-cyan-600">28</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  2
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">217</td>
              </tr>

              {/* 20 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Kalimantan Tengah
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  6
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">157</td>
              </tr>

              {/* 21 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Kalimantan Selatan
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">47</td>
                <td className="px-6 py-4 border-2 border-cyan-600">47</td>
                <td className="px-6 py-4 border-2 border-cyan-600">27</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">17</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  0
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">276</td>
              </tr>

              {/* 22 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Kalimantan Timur
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">35</td>
                <td className="px-6 py-4 border-2 border-cyan-600">43</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">15</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  0
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">266</td>
              </tr>

              {/* 23 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Sulawesi Utara
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  7
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">147</td>
              </tr>

              {/* 24 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Sulawesi Tengah
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">29</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  9
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">211</td>
              </tr>

              {/* 25 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Sulawesi Selatan
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">59</td>
                <td className="px-6 py-4 border-2 border-cyan-600">64</td>
                <td className="px-6 py-4 border-2 border-cyan-600">62</td>
                <td className="px-6 py-4 border-2 border-cyan-600">43</td>
                <td className="px-6 py-4 border-2 border-cyan-600">38</td>
                <td className="px-6 py-4 border-2 border-cyan-600">36</td>
                <td className="px-6 py-4 border-2 border-cyan-600">32</td>
                <td className="px-6 py-4 border-2 border-cyan-600">34</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">25</td>
                <td className="px-6 py-4 border-2 border-cyan-600">36</td>
                <td className="px-6 py-4 border-2 border-cyan-600">35</td>
                <td className="px-6 py-4 border-2 border-cyan-600">73</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  15
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">642</td>
              </tr>

              {/* 26 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">25</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Sulawesi Tenggara
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">27</td>
                <td className="px-6 py-4 border-2 border-cyan-600">18</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">31</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  7
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">227</td>
              </tr>

              {/* 27 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Gorontalo
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  3
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">109</td>
              </tr>

              {/* 28 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">27</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Sulawesi Barat
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  2
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">144</td>
              </tr>

              {/* 29 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">28</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Maluku</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  4
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">148</td>
              </tr>

              {/* 30 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">29</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Maluku Utara
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  2
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">87</td>
              </tr>

              {/* 31 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">30</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Papua</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">11</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">27</td>
                <td className="px-6 py-4 border-2 border-cyan-600">16</td>
                <td className="px-6 py-4 border-2 border-cyan-600">22</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  8
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">230</td>
              </tr>

              {/* 32 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">31</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Papua Barat
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">13</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  2
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">109</td>
              </tr>

              {/* 33 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">33</td>
                <td className="px-6 py-4 border-2 border-cyan-600">Pusat</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">28</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">21</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">19</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">30</td>
                <td className="px-6 py-4 border-2 border-cyan-600">28</td>
                <td className="px-6 py-4 border-2 border-cyan-600">24</td>
                <td className="px-6 py-4 border-2 border-cyan-600">60</td>
                <td className="px-6 py-4 border-2 border-cyan-600">35</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  1
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">388</td>
              </tr>

              {/* 34 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">34</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  Kalimantan Utara
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">6</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">10</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  0
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">84</td>
              </tr>

              {/* 35 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">35</td>
                <td className="px-6 py-4 border-2 border-cyan-600">
                  DKI Jakarta
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  8
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">230</td>
              </tr>

              {/* 36 */}
              <tr className="   text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">36</td>
                <td className="px-6 py-4 border-2 border-cyan-600">KEMENHAN</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">8</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">23</td>
                <td className="px-6 py-4 border-2 border-cyan-600">26</td>
                <td className="px-6 py-4 border-2 border-cyan-600">63</td>
                <td className="px-6 py-4 border-2 border-cyan-600">56</td>
                <td className="px-6 py-4 border-2 border-cyan-600">46</td>
                <td className="px-6 py-4 border-2 border-cyan-600">56</td>
                <td className="px-6 py-4 border-2 border-cyan-600">41</td>
                <td className="px-6 py-4 border-2 border-cyan-600">20</td>
                <td className="px-6 py-4 border-2 border-cyan-600">30</td>
                <td className="px-6 py-4 border-2 border-cyan-600">45</td>
                <td className="px-6 py-4 border-2 border-cyan-600">32</td>
                <td className="px-6 py-4 border-2 border-cyan-600">59</td>
                <td className="px-6 py-4 border-2 border-cyan-600">14</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  26
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">559</td>
              </tr>

              {/* 37 */}
              <tr className="  text-lg text-gray-900">
                <td className="px-6 py-4 border-2 border-cyan-600">37</td>
                <td className="px-6 py-4 border-2 border-cyan-600">POLRI</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1</td>
                <td className="px-6 py-4 border-2 border-cyan-600">4</td>
                <td className="px-6 py-4 border-2 border-cyan-600">7</td>
                <td className="px-6 py-4 border-2 border-cyan-600">12</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">3</td>
                <td className="px-6 py-4 border-2 border-cyan-600">2</td>
                <td className="px-6 py-4 border-2 border-cyan-600">5</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600 text-red-500">
                  0
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">48</td>
              </tr>

              <tr className=" text-lg text-black font-medium">
                <td className="px-6 py-4 border-2 border-cyan-600" colSpan={2}>
                  TOTAL
                </td>
                <td className="px-6 py-4 border-2 border-cyan-600">183</td>
                <td className="px-6 py-4 border-2 border-cyan-600">54</td>
                <td className="px-6 py-4 border-2 border-cyan-600">90</td>
                <td className="px-6 py-4 border-2 border-cyan-600">610</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1035</td>
                <td className="px-6 py-4 border-2 border-cyan-600">1061</td>
                <td className="px-6 py-4 border-2 border-cyan-600">749</td>
                <td className="px-6 py-4 border-2 border-cyan-600">728</td>
                <td className="px-6 py-4 border-2 border-cyan-600">760</td>
                <td className="px-6 py-4 border-2 border-cyan-600">640</td>
                <td className="px-6 py-4 border-2 border-cyan-600">485</td>
                <td className="px-6 py-4 border-2 border-cyan-600">354</td>
                <td className="px-6 py-4 border-2 border-cyan-600">384</td>
                <td className="px-6 py-4 border-2 border-cyan-600">398</td>
                <td className="px-6 py-4 border-2 border-cyan-600">295</td>
                <td className="px-6 py-4 border-2 border-cyan-600">349</td>
                <td className="px-6 py-4 border-2 border-cyan-600">576</td>
                <td className="px-6 py-4 border-2 border-cyan-600">186</td>
                <td className="px-6 py-4 border-2 border-cyan-600">0</td>
                <td className="px-6 py-4 border-2 border-cyan-600">164</td>
                <td className="px-6 py-4 border-2 border-cyan-600">9201</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Peserta;
