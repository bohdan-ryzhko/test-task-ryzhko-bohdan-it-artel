class Observable {
	constructor(subscriptionFunction) {
		this.subscriptionFunction = subscriptionFunction;
	}

	subscribe(observer) {
		this.subscriptionFunction(observer);
	}
}

export const timer = seconds => {
	return new Observable(observer => {
		setTimeout(() => {
			observer.next(1);
			observer.next(2);
			observer.next(3);
			observer.complete("done");
		}, seconds * 1000);
	})
}
