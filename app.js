$(document).ready(function () {
	const loginModal = $('#loginModal')
	const usernameInput = $('#username')
	const passwordInput = $('#password')
	const loginBtn = $('#loginBtn')
	const aiSearchBtn = $('#ai-search-btn')
	const aiResponseDiv = $('#ai-response')
	const userQuestionInput = $('#user-question')

	function addBudgetPlanner() {
		let budgetContainer = $('#budget-container')
		let incomeInput = $('<input>')
			.attr('type', 'number')
			.attr('id', 'income')
			.attr('placeholder', 'Enter your monthly income')
		let expenseInput = $('<input>')
			.attr('type', 'number')
			.attr('id', 'expenses')
			.attr('placeholder', 'Enter your monthly expenses')
		let calculateButton = $('<button>')
			.text('Calculate Budget')
			.attr('id', 'calculate-budget')
		let resultDiv = $('<div>').attr('id', 'budget-result')

		calculateButton.on('click', function () {
			let income = parseFloat($('#income').val())
			let expenses = parseFloat($('#expenses').val())
			if (isNaN(income) || isNaN(expenses)) {
				resultDiv.text(
					'Please enter valid numbers for both income and expenses.'
				)
			} else {
				let savings = income - expenses
				resultDiv.text('Your monthly savings are: $' + savings.toFixed(2))
			}
		})

		budgetContainer.append(
			incomeInput,
			expenseInput,
			calculateButton,
			resultDiv
		)
	}

	// Call the function to add the budget planner to the website
	addBudgetPlanner()

	$('#loginForm').on('submit', function (event) {
		event.preventDefault()

		let username = usernameInput.val()
		let password = passwordInput.val()

		if (username === 'khati' && password === '390') {
			alert('Login successful! Welcome to Gen Z Financial Advisor.')
			loginModal.hide()
			$('#financial-advice').show()
			$('#budget-container').show()
			displayFinancialAdvice(username)
		} else {
			alert('Invalid username or password')
			$('#financial-advice').hide()
			$('#budget-container').hide()
		}
	})

	function displayFinancialAdvice(username) {
		let advice = `Hello ${username}, based on your profile and market trends, we recommend the following:
        <ul>
            <li>Invest 20% of your income in a diversified portfolio.</li>
            <li>Create an emergency fund covering at least 6 months of expenses.</li>
            <li>Consider investing in low-cost index funds for long-term growth.</li>
        </ul>`
		$('#advice-content').html(advice)
	}

	aiSearchBtn.on('click', function () {
		const userQuestion = userQuestionInput.val()

		if (userQuestion.trim() === '') {
			aiResponseDiv.text('Please enter a question before asking AI.').show()
			return
		}

		let aiResponse = `Sure, I can help you with that! Based on your question "${userQuestion}", here is my advice:
        <ul>
            <li>Review your current budget and identify areas where you can cut back on unnecessary expenses.</li>
            <li>Set clear financial goals and create a plan to achieve them.</li>
        </ul>`
		aiResponseDiv.html(aiResponse).show()
	})
})
