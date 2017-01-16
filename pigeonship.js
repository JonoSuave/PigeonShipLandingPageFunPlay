$.loadmodal({
          url: 'figuring-out-banner.html',
          id: 'image-pop-up-modal',
          title: 'My Title',
          width: '400px',
          ajax: {
            dataType: 'html',
            method: 'POST',
            success: function(data, status, xhr) {
              console.log($('#custom_modal_id'));
            },//
            // any other options from the regular $.ajax call (see JQuery docs)
          },
        });