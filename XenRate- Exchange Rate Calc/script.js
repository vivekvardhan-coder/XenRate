 // Currency data with codes, names and symbols
 const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'MXN', name: 'Mexican Peso', symbol: 'MX$' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
    { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R' }
  ];

  // Exchange rates simulation (in real world, these would come from an API)
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.72, JPY: 115.23, CAD: 1.32, AUD: 1.42, CHF: 0.91, CNY: 6.37, INR: 73.48, MXN: 20.58, SGD: 1.36, NZD: 1.53, BRL: 5.24, SEK: 9.68, ZAR: 14.93 },
    EUR: { USD: 1.18, GBP: 0.85, JPY: 135.63, CAD: 1.55, AUD: 1.67, CHF: 1.07, CNY: 7.49, INR: 86.45, MXN: 24.21, SGD: 1.60, NZD: 1.80, BRL: 6.17, SEK: 11.39, ZAR: 17.56 },
    GBP: { USD: 1.39, EUR: 1.18, JPY: 159.55, CAD: 1.82, AUD: 1.97, CHF: 1.26, CNY: 8.81, INR: 101.7, MXN: 28.48, SGD: 1.88, NZD: 2.12, BRL: 7.26, SEK: 13.4, ZAR: 20.66 },
    JPY: { USD: 0.0087, EUR: 0.0074, GBP: 0.0063, CAD: 0.0114, AUD: 0.0123, CHF: 0.0079, CNY: 0.0553, INR: 0.6376, MXN: 0.1785, SGD: 0.0118, NZD: 0.0133, BRL: 0.0455, SEK: 0.0841, ZAR: 0.1296 },
    CAD: { USD: 0.76, EUR: 0.65, GBP: 0.55, JPY: 87.68, AUD: 1.08, CHF: 0.69, CNY: 4.84, INR: 55.91, MXN: 15.65, SGD: 1.03, NZD: 1.16, BRL: 3.98, SEK: 7.36, ZAR: 11.34 },
    AUD: { USD: 0.7, EUR: 0.6, GBP: 0.51, JPY: 81.2, CAD: 0.93, CHF: 0.64, CNY: 4.48, INR: 51.76, MXN: 14.49, SGD: 0.96, NZD: 1.08, BRL: 3.69, SEK: 6.82, ZAR: 10.5 },
    CHF: { USD: 1.1, EUR: 0.93, GBP: 0.79, JPY: 126.9, CAD: 1.45, AUD: 1.56, CNY: 6.99, INR: 80.75, MXN: 22.62, SGD: 1.49, NZD: 1.68, BRL: 5.76, SEK: 10.64, ZAR: 16.39 },
    CNY: { USD: 0.16, EUR: 0.13, GBP: 0.11, JPY: 18.09, CAD: 0.21, AUD: 0.22, CHF: 0.14, INR: 11.54, MXN: 3.23, SGD: 0.21, NZD: 0.24, BRL: 0.82, SEK: 1.52, ZAR: 2.34 },
    INR: { USD: 0.014, EUR: 0.012, GBP: 0.01, JPY: 1.57, CAD: 0.018, AUD: 0.019, CHF: 0.012, CNY: 0.087, MXN: 0.28, SGD: 0.019, NZD: 0.021, BRL: 0.071, SEK: 0.13, ZAR: 0.2 },
    MXN: { USD: 0.049, EUR: 0.041, GBP: 0.035, JPY: 5.6, CAD: 0.064, AUD: 0.069, CHF: 0.044, CNY: 0.31, INR: 3.57, SGD: 0.066, NZD: 0.074, BRL: 0.25, SEK: 0.47, ZAR: 0.73 },
    SGD: { USD: 0.74, EUR: 0.63, GBP: 0.53, JPY: 84.99, AUD: 1.05, CHF: 0.67, CNY: 4.69, INR: 54.16, MXN: 15.17, NZD: 1.13, BRL: 3.86, SEK: 7.13, ZAR: 10.99 },
    NZD: { USD: 0.65, EUR: 0.56, GBP: 0.47, JPY: 75.22, CAD: 0.86, AUD: 0.93, CHF: 0.59, CNY: 4.15, INR: 47.94, MXN: 13.43, SGD: 0.89, BRL: 3.42, SEK: 6.31, ZAR: 9.72 },
    BRL: { USD: 0.19, EUR: 0.16, GBP: 0.14, JPY: 22.01, CAD: 0.25, AUD: 0.27, CHF: 0.17, CNY: 1.22, INR: 14.03, MXN: 3.93, SGD: 0.26, NZD: 0.29, SEK: 1.85, ZAR: 2.85 },
    SEK: { USD: 0.1, EUR: 0.088, GBP: 0.075, JPY: 11.9, CAD: 0.14, AUD: 0.15, CHF: 0.094, CNY: 0.66, INR: 7.59, MXN: 2.13, SGD: 0.14, NZD: 0.16, BRL: 0.54, ZAR: 1.54 },
    ZAR: { USD: 0.067, EUR: 0.057, GBP: 0.048, JPY: 7.72, CAD: 0.088, AUD: 0.095, CHF: 0.061, CNY: 0.43, INR: 4.92, MXN: 1.38, SGD: 0.091, NZD: 0.1, BRL: 0.35, SEK: 0.65 }
  };

  // DOM elements
  const amountInput = document.getElementById('amount');
  const fromCurrencySelect = document.getElementById('from-currency');
  const toCurrencySelect = document.getElementById('to-currency');
  const swapButton = document.getElementById('swap-btn');
  const convertButton = document.getElementById('convert-btn');
  const convertText = document.getElementById('convert-text');
  const loadingSpinner = document.getElementById('loading-spinner');
  const resultContainer = document.getElementById('result-container');
  const resultAmount = document.getElementById('result-amount');
  const resultText = document.getElementById('result-text');
  const exchangeRateInfo = document.getElementById('exchange-rate-info');
  const lastUpdated = document.getElementById('last-updated');

  // Populate currency selects
  function populateCurrencySelects() {
    currencies.forEach(currency => {
      const fromOption = document.createElement('option');
      fromOption.value = currency.code;
      fromOption.textContent = `${currency.code} - ${currency.name}`;
      fromOption.selected = currency.code === 'USD';
      fromCurrencySelect.appendChild(fromOption);
      
      const toOption = document.createElement('option');
      toOption.value = currency.code;
      toOption.textContent = `${currency.code} - ${currency.name}`;
      toOption.selected = currency.code === 'EUR';
      toCurrencySelect.appendChild(toOption);
    });
  }

  // Format currency amount
  function formatCurrency(amount, currencyCode) {
    const currency = currencies.find(c => c.code === currencyCode);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }

  // Convert currency
  function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    // Show loading state
    convertText.style.display = 'none';
    loadingSpinner.style.display = 'inline-block';
    
    // Simulate API call delay
    setTimeout(() => {
      let exchangeRate;
      
      if (fromCurrency === toCurrency) {
        exchangeRate = 1;
      } else {
        exchangeRate = exchangeRates[fromCurrency][toCurrency];
      }
      
      const result = amount * exchangeRate;
      
      // Update result
      resultAmount.textContent = formatCurrency(result, toCurrency);
      resultText.textContent = `${amount} ${fromCurrency} = ${formatCurrency(result, toCurrency)}`;
      exchangeRateInfo.textContent = `1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`;
      
      // Show result with animation
      resultContainer.classList.add('result-active');
      
      // Reset loading state
      convertText.style.display = 'inline-block';
      loadingSpinner.style.display = 'none';
      
      // Set last updated
      const now = new Date();
      lastUpdated.textContent = `Last updated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }, 800);
  }

  // Create twinkling money symbols for background
  function createMoneySymbols() {
    const symbols = ['$', '€', '£', '¥', '₹', '₽', '฿', '₩', '₺', '₴', '₫', '₦'];
    const moneySymbolsContainer = document.getElementById('money-symbols');
    const numberOfSymbols = 40;
    
    for (let i = 0; i < numberOfSymbols; i++) {
      const symbol = document.createElement('div');
      symbol.className = 'money-symbol';
      symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      
      // Fixed positioning with random placement
      const size = Math.floor(Math.random() * 24) + 16;
      const left = Math.floor(Math.random() * 100);
      const top = Math.floor(Math.random() * 100);
      const delay = Math.random() * 3;
      const duration = Math.random() * 2 + 2;
      
      symbol.style.fontSize = `${size}px`;
      symbol.style.left = `${left}%`;
      symbol.style.top = `${top}%`;
      symbol.style.animationDelay = `${delay}s`;
      symbol.style.animationDuration = `${duration}s`;
      
      moneySymbolsContainer.appendChild(symbol);
    }
  }
  
  // Initialize money symbols
  createMoneySymbols();

  // Swap currencies
  function swapCurrencies() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    
    fromCurrencySelect.value = toCurrency;
    toCurrencySelect.value = fromCurrency;
    
    // Add rotation animation
    swapButton.classList.add('rotating');
    setTimeout(() => {
      swapButton.classList.remove('rotating');
    }, 500);
    
    // If there's a result, update it
    if (resultContainer.classList.contains('result-active')) {
      convertCurrency();
    }
  }

  // Initialize
  function initialize() {
    populateCurrencySelects();
    
    // Set event listeners
    convertButton.addEventListener('click', convertCurrency);
    swapButton.addEventListener('click', swapCurrencies);
    
    // Auto-convert on currency change
    fromCurrencySelect.addEventListener('change', () => {
      if (resultContainer.classList.contains('result-active')) {
        convertCurrency();
      }
    });
    
    toCurrencySelect.addEventListener('change', () => {
      if (resultContainer.classList.contains('result-active')) {
        convertCurrency();
      }
    });
    
    // Auto-convert when amount is changed (after debounce)
    let timeout;
    amountInput.addEventListener('input', () => {
      clearTimeout(timeout);
      if (resultContainer.classList.contains('result-active')) {
        timeout = setTimeout(convertCurrency, 500);
      }
    });
    
    // Set initial date
    const now = new Date();
    lastUpdated.textContent = `Last updated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    
    // Initial conversion
    convertCurrency();
  }

  // Start the app
  initialize();