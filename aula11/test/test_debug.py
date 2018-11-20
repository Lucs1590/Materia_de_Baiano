import unittest
from src.briton_damassa import debug


@debug.debug()
def soma(a,b):
    return a + b

class TestDebug(unittest.TestCase):
    
    def test_test(self):
        self.assertTrue(True)

    def test_arg_to_string(self):
        expected = '((1, 2, 3),{})'
        result = debug.args_to_string(args=(1,2,3),kwargs={})
        self.assertEqual(result,expected)

    def test_soma(self):
        expected = 5
        result = soma(2,3)
        self.assertEqual(result,expected)

    was_called = False

    def test_soma_custom_output(self):

        expected = '((2, 3),{})'

        def test_output(text):
            self.assertEqual(text,expected)
            self.was_called = True

        @debug.debug(output=test_output)
        def soma_custom_output(a,b):
            pass

        soma_custom_output(2,3)
        self.assertTrue(self.was_called)
