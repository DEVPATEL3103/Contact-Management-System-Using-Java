document.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById("contactModal");
    const editContactModal = document.getElementById("editContactModal");
    const closeContactModal = contactModal.querySelector(".close");
    const closeEditModal = document.getElementById("closeEditModal");
    const editContactBtn = document.getElementById("editContactBtn");
    const saveEditBtn = document.getElementById("saveEditBtn");
    const cancelEditBtn = document.getElementById("cancelEditBtn");
    
    var contactRows = document.getElementsByClassName("contact-row");

    // Loop through contact rows to add click events
    for (var i = 0; i < contactRows.length; i++) {
        contactRows[i].onclick = function() {
            var name = this.cells[1].innerText; // Get the name from the second cell
            var phone = this.cells[2].innerText; // Get the phone from the third cell
            var email = this.cells[3].innerText; // Get the email from the fourth cell
            var contactId = this.getAttribute('data-contact-id'); // Get contact ID
            
            // Set modal content
            document.getElementById("modalName").innerText = name;
            document.getElementById("modalPhone").innerText = phone;
            document.getElementById("modalEmail").innerText = email;

            // Set the data-contact-id for delete functionality
            document.getElementById("deleteContactBtn").setAttribute('data-contact-id', contactId);
            
            contactModal.style.display = "block"; // Show contact details modal
        }
    }

    // Close contact modal
    closeContactModal.onclick = function() {
        contactModal.style.display = "none";
    };

    // Close edit modal
    closeEditModal.onclick = function() {
        editContactModal.style.display = "none";
    };

    // Cancel edit action
    cancelEditBtn.onclick = function() {
        editContactModal.style.display = "none"; // Hide edit modal
    };

    // Save edited contact details
    saveEditBtn.onclick = function() {
        const updatedName = document.getElementById("editName").value;
        const updatedPhone = document.getElementById("editPhone").value;
        const updatedEmail = document.getElementById("editEmail").value;

        // Update the modal content
        document.getElementById("modalName").innerText = updatedName;
        document.getElementById("modalPhone").innerText = updatedPhone;
        document.getElementById("modalEmail").innerText = updatedEmail;

        editContactModal.style.display = "none"; // Hide edit modal
    };

    // Handle delete functionality
    document.getElementById("deleteContactBtn").onclick = function() {
        const contactId = this.getAttribute('data-contact-id'); // Get the contact ID
        const confirmation = confirm("Are you sure you want to delete this contact?");
        
        if (confirmation) {
            // Redirect to the deleteContact servlet with the contact ID
            window.location.href = "../deleteContact?id=" + contactId; // Update with your servlet mapping
        }
        
        contactModal.style.display = "none"; // Close modal after delete click
    };

    // Close modal if clicked outside modal content
    window.onclick = function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = "none"; // Hide contact modal
        }
        if (event.target === editContactModal) {
            editContactModal.style.display = "none"; // Hide edit modal
        }
    };

    // Sorting functionality
    const sortOrderSelect = document.getElementById('sortOrder');
    const contactsBody = document.getElementById('contactsBody');

    function sortContacts(order) {
        const rows = Array.from(contactsBody.querySelectorAll('tr'));

        rows.sort((a, b) => {
            const nameA = a.cells[1].innerText.toLowerCase(); 
            const nameB = b.cells[1].innerText.toLowerCase();

            if (order === 'asc') {
                return nameA > nameB ? 1 : -1;
            } else if (order === 'desc') {
                return nameA < nameB ? 1 : -1;
            }
        });

        contactsBody.innerHTML = '';
        rows.forEach(row => contactsBody.appendChild(row));
    }

    sortOrderSelect.addEventListener('change', (e) => {
        const sortOrder = e.target.value;
        sortContacts(sortOrder);
    });

    sortContacts('asc'); // Initial sort
});



