venv:
	python3.6 -m venv ENV

test:
	PYTHONPATH=src/ python -m unittest discover test/

coverage:
	coverage run --source src/ -m unittest discover test/
	coverage html