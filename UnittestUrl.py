import requests
import json
import unittest
import CustomAssert
import datetime


class UnittestSuper(unittest.TestCase, CustomAssert.CustomAssertions):
    def setUp(self):
        print("Thiet Lap cac Truong Hop Cua TestUnitTes")

    def tearDown(self):
        print("Don dep cac truong hop cua TestUnitest")


class TestURL(UnittestSuper):
    def runTest(self):
        url = "http://localhost:3000/kqxsmb?id=8-11-2017"
        # request to URL
        r = requests.get(url)
        # check status code
        self.check_stt_code(r)
        # check data response
        self.assertTrue(r.content, "Khong Co Data")
        # check data valid json
        self.check_json(r.content)
        # check structure data
        self.check_data_full_mb(r.content)


class TestURL_MN(UnittestSuper):
    def runTest(self):
        url = "http://localhost:3000/kqxsmn/kqxshcm?id=16-11-2017"
        r = requests.get(url)
        self.check_stt_code(r)
        self.assertTrue(r.content, "Khong Co Data")
        self.check_json(r.content)
        self.check_data_full_mk(r.content)


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