import requests
import json
import unittest
import CustomAssert
import datetime
import xmlrunner


class UnittestSuper(unittest.TestCase, CustomAssert.CustomAssertions):
    def setUp(self):
        print("Thiet Lap cac Truong Hop Cua TestUnitTes")

    def tearDown(self):
        print("Don dep cac truong hop cua TestUnitest")

class TestURL(unittest.TestCase):
    global url
    global r
    url = "http://localhost:3000/kqxsmb?id=8-11-2017"
    # request to URL
    r = requests.get(url)
    # check status code
    def check_stt(self):
        self.check_stt_code(self, r)
    
    # check data response
    def check_data_rs(self):
        self.assertTrue(r.content, "Khong Co Data")
    
    def check_data_vali(self):
        # check data valid json
        self.check_json(r.content)
    
    def check_struc_data(self):
        # check structure data
        self.check_data_full_mb(r.content)
    
    def runTest(self):
        self.check_stt()
        self.check_data_rs()
        self.check_data_vali()
        self.check_struc_data()

class TestURL_MN(unittest.TestCase):
    global url2
    global r2
    url2 = "http://localhost:3000/kqxsmn/kqxshcm?id=16-11-2017"
    r2 = requests.get(url2)
    def check_stt(self):
        self.check_stt_code(self, r2)
    
    def check_data_rs(self):
        self.assertTrue(r2.content, "Khong Co Data")
    
    def check_vali_data(self):
        self.check_json(r2.content)
    
    def check_data(self):
        self.check_data_full_mk(r2.content)
    
    def runTest(self):
        self.check_stt()
        self.check_data_rs()
        self.check_vali_data()
        self.check_data()

def suite():
    suite = unittest.TestSuite()
    suite.addTest(TestURL())
    suite.addTest(TestURL_MN())
    return suite

if __name__ == "__main__":
    unittest.main(testRunner=xmlrunner.XMLTestRunner(output='./Demo_xml'))
