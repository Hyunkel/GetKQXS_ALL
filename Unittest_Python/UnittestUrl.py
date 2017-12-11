import requests
import json
import unittest
import CustomAssert
import xmlrunner


class UnittestSuper(unittest.TestCase, CustomAssert.CustomAssertions):
    def setUp(self):
        print("Thiet Lap cac Truong Hop Cua TestUnitTes")

    def tearDown(self):
        print("Don dep cac truong hop cua TestUnitest")

class TestURL_MB(UnittestSuper):
    global url
    global r
    url = "http://localhost:3000/kqxsmb?id=8-11-2017"
    r = requests.get(url)
    def test_stt_code(self):
        # check status code
        self.check_stt_code(r)
    
    def test_data_rs(self):
        self.assertTrue(r.content, "Khong Co Data")
    
    def test_data_vali(self):
        # check data valid json
        self.check_json(r.content)
    
    def test_struc_data(self):
        # check structure data
        self.check_data_full_mb(r.content)

#
class TestURL_MN(UnittestSuper):
    global url2
    global r2
    url2 = "http://localhost:3000/kqxsmn/kqxshcm?id=16-11-2017"
    r2 = requests.get(url2)
    def test_stt_code(self):
        # check status code
        self.check_stt_code(r2)
    
    def test_data_rs(self):
        self.assertTrue(r2.content, "Khong Co Data")
    
    def test_data_vali(self):
        # check data valid json
        self.check_json(r2.content)
    
    def test_struc_data(self):
        # check structure data
        self.check_data_full_mk(r2.content)


class TestURL_MT(UnittestSuper):
    global url3
    global r3
    url3 = "http://localhost:3000/kqxsmt/kqxsqt?id=16-11-2017"
    r3 = requests.get(url3)
    def test_stt_code(self):
        # check status code
        self.check_stt_code(r3)
    
    def test_data_rs(self):
        self.assertTrue(r3.content, "Khong Co Data")
    
    def test_data_vali(self):
        # check data valid json
        self.check_json(r3.content)
    
    def test_struc_data(self):
        # check structure data
        self.check_data_full_mk(r3.content)

if __name__ == "__main__":
    unittest.main(testRunner=xmlrunner.XMLTestRunner(output='./Demo_xml'))
