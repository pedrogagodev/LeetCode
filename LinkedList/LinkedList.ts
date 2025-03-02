class ClassNode<T> {
	data: T;
	next: ClassNode<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList<T> {
	private head: ClassNode<T> | null;
	private tail: ClassNode<T> | null;
	private size: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	insertAtBeginning(data: T): void {
		const newNode = new ClassNode(data);

		newNode.next = this.head;
		this.head = newNode;

		if (this.tail === null) {
			this.tail = newNode;
		}
		this.size++;
	}

	insertAtEnd(data: T): void {
		const newNode = new ClassNode(data);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			this.tail!.next = newNode;
			this.tail = newNode;
		}
		this.size++;
	}

	delete(data: T): void {
		if (this.head === null) {
			return;
		}

		if (this.head.data === data) {
			this.head = this.head.next;
			this.size--;
			if (this.head === null) {
				this.tail = null;
			}
			return;
		}

		let current: ClassNode<T> | null = this.head;

		while (current.next != null) {
			if (current.next.data === data) {
				current.next = current.next.next;
				this.size--;
				if (current.next === null) {
					this.tail = current;
				}
				return;
			}
			current = current.next;
		}
	}

	contains(data: T): boolean {
		let current = this.head;
		while (current !== null) {
			if (current.data === data) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	toArray(): T[] {
		const result: T[] = [];
		let current = this.head;

		while (current !== null) {
			result.push(current.data);
			current = current.next;
		}
		return result;
	}

	getSize(): number {
		return this.size;
	}
}

// Function to execute tests
function runTests(): void {
	console.log("Starting LinkedList tests...");

	// Test 1: Empty list
	const list1 = new LinkedList<number>();
	console.assert(
		list1.getSize() === 0,
		"Test 1.1: Size should be 0 for an empty list",
	);
	console.assert(
		list1.toArray().length === 0,
		"Test 1.2: toArray should return an empty array",
	);
	console.assert(
		list1.contains(5) === false,
		"Test 1.3: contains should return false for an empty list",
	);

	// Test 2: Insert at the beginning
	const list2 = new LinkedList<number>();
	list2.insertAtBeginning(1);
	list2.insertAtBeginning(2);
	list2.insertAtBeginning(3);
	console.assert(
		list2.getSize() === 3,
		"Test 2.1: Size should be 3 after inserting at the beginning",
	);
	console.assert(
		JSON.stringify(list2.toArray()) === JSON.stringify([3, 2, 1]),
		"Test 2.2: Order should be [3, 2, 1] after inserting at the beginning",
	);

	// Test 3: Insert at the end
	const list3 = new LinkedList<number>();
	list3.insertAtEnd(1);
	list3.insertAtEnd(2);
	list3.insertAtEnd(3);
	console.assert(
		list3.getSize() === 3,
		"Test 3.1: Size should be 3 after inserting at the end",
	);
	console.assert(
		JSON.stringify(list3.toArray()) === JSON.stringify([1, 2, 3]),
		"Test 3.2: Order should be [1, 2, 3] after inserting at the end",
	);

	// Test 4: Delete from the beginning
	const list4 = new LinkedList<number>();
	list4.insertAtEnd(1);
	list4.insertAtEnd(2);
	list4.insertAtEnd(3);
	list4.delete(1);
	console.assert(
		list4.getSize() === 2,
		"Test 4.1: Size should be 2 after deleting the first element",
	);
	console.assert(
		JSON.stringify(list4.toArray()) === JSON.stringify([2, 3]),
		"Test 4.2: List should be [2, 3] after removing 1",
	);

	// Test 5: Delete from the end
	const list5 = new LinkedList<number>();
	list5.insertAtEnd(1);
	list5.insertAtEnd(2);
	list5.insertAtEnd(3);
	list5.delete(3);
	console.assert(
		list5.getSize() === 2,
		"Test 5.1: Size should be 2 after removing the last element",
	);
	console.assert(
		JSON.stringify(list5.toArray()) === JSON.stringify([1, 2]),
		"Test 5.2: List should be [1, 2] after removing 3",
	);

	// Test 6: Delete from the middle
	const list6 = new LinkedList<number>();
	list6.insertAtEnd(1);
	list6.insertAtEnd(2);
	list6.insertAtEnd(3);
	list6.delete(2);
	console.assert(
		list6.getSize() === 2,
		"Test 6.1: Size should be 2 after removing the middle element",
	);
	console.assert(
		JSON.stringify(list6.toArray()) === JSON.stringify([1, 3]),
		"Test 6.2: List should be [1, 3] after removing 2",
	);

	// Test 7: Verify if exists
	const list7 = new LinkedList<number>();
	list7.insertAtEnd(1);
	list7.insertAtEnd(2);
	console.assert(list7.contains(1) === true, "Test 7.1: should find 1");
	console.assert(list7.contains(3) === false, "Test 7.2: should not find 3");

	// Test 8: Remove in empty list
	const list8 = new LinkedList<number>();
	list8.delete(1); // Should not give an error
	console.assert(
		list8.getSize() === 0,
		"Test 8.1: Size should remain 0 after attempting to delete from an empty list",
	);

	// Test 9: List with one element
	const list9 = new LinkedList<number>();
	list9.insertAtEnd(1);
	list9.delete(1);
	console.assert(
		list9.getSize() === 0,
		"Test 9.1: Size should be 0 after removing the only element",
	);
	console.assert(
		list9.toArray().length === 0,
		"Test 9.2: List should be empty after removing the only element",
	);

	console.log("Tests completed!");
}

// Run tests
runTests();
