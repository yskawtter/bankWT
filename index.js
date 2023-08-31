//JAVASCRIPT MOBILE
class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelector(navLinks)
        this.activeClass = 'active'

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        console.log(this)
        this.navList.classList.toggle(this.activeClass)
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick)
    }
    init() {
        if(this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}
const mobileNavBar = new MobileNavBar(
    '.mobile-menu',
    '.nav-first',
    '.nav-first a'
)
mobileNavBar.init()


/*emprestimo*/
function emprestimoCalculate() {
    const valueEmprestimo = document.querySelector('#valueEmprestimo')
    const simuleEmprestimoBTN = document.querySelector('.simuleEmprestimoBTN')
    let resultEmprestimo = document.querySelector('.resultEmprestimo')
    let emprestimoTotalRes = document.querySelector('.emprestimoTotalRes')

    const testeArr = []
    
    if(!!valueEmprestimo) {
        
    const taxBank = [1.123, 1.22, 1.33, 1.55, 1.66]
    
    simuleEmprestimoBTN.addEventListener('click', function(e) {
        e.preventDefault()
        resultEmprestimo.classList.add('setEmprestimo')
        for(let i = 0; i <= 12; i++) {
            let resulBruteValueEmprestimo = valueEmprestimo.value

            if(resulBruteValueEmprestimo !== '') {
                let valorEmprestimo = ((resulBruteValueEmprestimo / 12 ) * taxBank[2]).toFixed(2)
                let valorTotalEmprestimoCalculate = (valorEmprestimo * 12).toFixed(2)
                emprestimoTotalRes.innerText = `VALOR TOTAL DAS PARCELAS A PAGAR R$${valorTotalEmprestimoCalculate}`
                console.log(valorEmprestimo)
                testeArr.push(`Parcela ${i} de 12 com valor de R$ ${valorEmprestimo}`)
                const newP = document.createElement('p')
                newP.innerText = testeArr[i]
                resultEmprestimo.appendChild(newP)
                } else {
                    alert('Preencha o valor')
                    return
                }


            if(resultEmprestimo.className.includes('setEmprestimo')) {
                console.log(resultEmprestimo)
                resultEmprestimo.innerText = ''
                resultEmprestimo.classList.remove('setEmprestimo')
            }
        }    
    })
}
}
emprestimoCalculate()
/*FAQ*/
function faqAnswer() {
    const answerSee = document.querySelectorAll('.faq-each-container')
    answerSee.forEach(ans => {
        ans.addEventListener('click', () => ans.childNodes[3].classList.toggle('closed'))
    })
}
faqAnswer()

function currentBalance() {
    const account1 = {
        owner: 'Yuri Souza',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
      };
      
      const account2 = {
        owner: 'Hirai Momo',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
      };
      
      const account3 = {
        owner: 'Samuel Lima Jackson',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
      };
      
      const account4 = {
        owner: 'Lim Jiyeon',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
      };

      const accounts = [account1, account2, account3, account4];

// Elements
    const labelWelcome = document.querySelector('.welcome');
    const labelDate = document.querySelector('.date');
    const labelBalance = document.querySelector('.balance__value');
    const labelSumIn = document.querySelector('.summary__value--in');
    const labelSumOut = document.querySelector('.summary__value--out');
    const labelSumInterest = document.querySelector('.summary__value--interest');
    const labelTimer = document.querySelector('.timer');
    const msgWelcome = document.querySelector('.msgWelcome')
    const loginInputScreen = document.querySelector('.login')

    const containerApp = document.querySelector('.app');
    const containerMovements = document.querySelector('.movements');

    const btnLogin = document.querySelector('.login__btn');
    const btnTransfer = document.querySelector('.form__btn--transfer');
    const btnLoan = document.querySelector('.form__btn--loan');
    const btnClose = document.querySelector('.form__btn--close');
    const btnSort = document.querySelector('.btn--sort');
    const navLoginBTN = document.querySelector('.nav-login')

    const inputLoginUsername = document.querySelector('.login__input--user');
    const inputLoginPin = document.querySelector('.login__input--pin');
    const inputTransferTo = document.querySelector('.form__input--to');
    const inputTransferAmount = document.querySelector('.form__input--amount');
    const inputLoanAmount = document.querySelector('.form__input--loan-amount');
    const inputCloseUsername = document.querySelector('.form__input--user');
    const inputClosePin = document.querySelector('.form__input--pin');

    //DISPLAY MOVEMENTS
    const displayMovements = function(movements, sort = false) {
        containerMovements.innerHTML = ''

        const movs = sort ? movements.slice().sort((a, b) => a - b) :  movements
        movs.forEach((mov, i) => {
            const type = mov > 0 ? 'deposit' : 'withdrawal'
            const html =`
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}</div>
          </div>
            `
         containerMovements.insertAdjacentHTML('afterbegin', html)
         
        })
      }
      //COMPUTING USERNAME
    const createUsername = function(accs) {
        accs.forEach((acc) => {
            acc.username = acc.owner.toLowerCase().split(' ').map(n => n[0]).join('')
        })
      }
    createUsername(accounts)

    const updateUI = function(acc) {
        //Display Movements
        displayMovements(acc.movements)
        //Display Balance
        calcDisplayBalance(acc)
        //Display Summary
        calcDisplaySummary(acc)
    }
    
    const calcDisplayBalance = function(acc) {
        acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0)
        labelBalance.textContent = `${acc.balance}€`
    }
    const calcDisplaySummary = function(acc) {
        const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur)
        labelSumIn.innerText = `${incomes}€`

        const outcome = acc.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0)
        const outcomeString = String(outcome).replace('-', '')
        labelSumOut.innerText = `${outcomeString}€`

        const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate/100).filter(int => int >= 1).reduce((acc, cur) => acc + cur, 0)
        labelSumInterest.innerText = `${interest}€`
    }
    

    //Event Handler
    let currentAccount;
    btnLogin.addEventListener('click', function(e) {
        e.preventDefault()
        currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value) 
    
        if(currentAccount?.pin === +inputLoginPin.value) {
            //DISPLAY UI and MSG
            msgWelcome.classList.remove('clsd')
            labelWelcome.textContent = `Seja bem vindo de volta ${currentAccount.owner.split(' ')[0]}  :) `

            containerApp.classList.remove('NotToSee')
            loginInputScreen.classList.add('NotToSee')
            navLoginBTN.classList.add('NotToSee')
            //Clear input fields

            //updateUI
            updateUI(currentAccount)
        }
    })
    btnTransfer.addEventListener('click', function(e) {
        e.preventDefault()

        const amount = +inputTransferAmount.value
        const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)

        inputTransferAmount.value = inputTransferTo.value = ''
        console.log(amount, receiverAcc)
        if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
            //DOING THE TRANSFER
            currentAccount.movements.push(-amount)
            receiverAcc.movements.push(amount)

            //updateUI
            updateUI(currentAccount)
        }

    })

    btnLoan.addEventListener('click', function(e) {
        e.preventDefault()

        const amount = +(inputLoanAmount.value)
        if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
            //ADD MOVMENT
            currentAccount.movements.push(amount)

            //updateUI
            updateUI(currentAccount)
        }
        inputLoanAmount.value = ''
    })

    btnClose.addEventListener('click', function(e) {
        e.preventDefault()
        
        
        if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === +inputClosePin.value) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username)
            console.log(index)
           accounts.splice(index, 1)
           containerApp.classList.add('NotToSee')
            loginInputScreen.classList.remove('NotToSee')
            navLoginBTN.classList.remove('NotToSee')
        }
        inputCloseUsername.value = inputClosePin.value = ''
    })

   let sorted = false
    btnSort.addEventListener('click', function(e) {
        e.preventDefault()
        displayMovements(currentAccount.movements, !sorted)
        sorted = !sorted
    })

    labelBalance.addEventListener('click', function() {
        const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
        el => +el.textContent.replace('€', '')
        )
        console.log(movementsUI)
    })
    
}
currentBalance()


