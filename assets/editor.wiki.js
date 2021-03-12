function pagemode(mode) {
    if (mode == 'edit') {
        let articleContent = $('#article-body').html();

        // Change Button
        $('#pagemode-toggle').attr('class', 'w3-button w3-green');
        $('#pagemode-toggle').attr('onclick', 'pagemode("read");');
        $('#pagemode-toggle').html('Save');
        $('#article-body').hide();

        // Display Controls
        $("#bold-btn").show();
        $("#itallic-btn").show();
        $('#article-editor').show();

        // Transfer Content
        $('#article-editor').html(articleContent);
    } else {
        let editorContent = $.trim($("#article-editor").val());

        // Change Button
        $('#pagemode-toggle').attr('onclick', 'pagemode("edit");');
        $('#pagemode-toggle').attr('class', 'w3-button');
        $('#pagemode-toggle').html('Edit');
        $('#article-body').show();

        // Hide Controls
        $("#bold-btn").hide();
        $("#itallic-btn").hide();
        $('#article-editor').hide();

        // Transfer Content

        $('#article-body').html(editorContent);
        $('#alert').show();
    }
}

function markup(mk) {
    if (mk == 'b') {
        $("#article-editor").surroundSelectedText("<strong>", "</strong>");
    } else if (mk == 'i') {
        $("#article-editor").surroundSelectedText("<em>", "</em>");
    }
}