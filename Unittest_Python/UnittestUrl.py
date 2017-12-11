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

url = "http://localhost:3000/kqxsmb?id=8-11-2017"
# request to URL
r = requests.get(url)
class TestURL(UnittestSuper):
    # check status code
    def runTest(self):
        self.check_stt_code(r)
    
    # check data response
    def check_data_rs(self):
        self.assertTrue(r.content, "Khong Co Data")
    
    def check_data_vali(self):
        # check data valid json
        self.check_json(r.content)
    
    def check_struc_data(self):
        # check structure data
        self.check_data_full_mb(r.content)

url2 = "http://localhost:3000/kqxsmn/kqxshcm?id=16-11-2017"
r2 = requests.get(url2)
class TestURL_MN(UnittestSuper):
    def check_stt(self):
        self.check_stt_code(self,r2)
    
    def check_data_rs(self):
        self.assertTrue(r2.content, "Khong Co Data")
    
    def check_vali_data(self):
        self.check_json(r2.content)
    
    def check_data(self):
        self.check_data_full_mk(r2.content)

    def runTest(self):
        self.check_data_rs(self)
        self.check_vali_data(self)
        self.check_data(self)

    
        
class TestURL_MT(UnittestSuper):
    def runTest(self):
        url = "http://localhost:3000/kqxsmt/kqxsqt?id=16-11-2017"
        r = requests.get(url)
        self.check_stt_code(r)
        self.assertTrue(r.content, "Khong Co Data")
        self.check_json(r.content)
        self.check_data_full_mk(r.content)


def suite():
    suite = unittest.TestSuite()
    suite.addTest(TestURL())
    suite.addTest(TestURL_MN())
    suite.addTest(TestURL_MT())
    return suite


if __name__ == "__main__":
    runner = unittest.TextTestRunner()
    test_suite = suite()
    runner.run(test_suite)
    runner2 = unittest.main(testRunner=xmlrunner.XMLTestRunner(output='./Demo_xml'))
