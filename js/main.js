function openModal(title, content) {
    $('#modalTitle').text(title);
    $('#modalContent').html(content);
    $('#detailsModal').modal('show');
  }